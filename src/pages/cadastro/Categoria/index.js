import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';

function CadastroCategoria() {
  const initialValue = {
    name: "initial name",
    description: "initial description",
    color: "#000"
  };

  const [categorias, setCategorias] = useState([]);
  const [ values, setValues ] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);

    setValues(initialValue);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChange(inputInfo) {
    // const { getAttribute, value } = inputInfo.target;

    setValue(
      inputInfo.target.getAttribute('name'), 
      inputInfo.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome"
          type="text"
          value={values["name"]}
          name="name"
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={ values["description"] }
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          value={ values["color"] }
          name="color"
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={indice}>
              { categoria.name }
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;