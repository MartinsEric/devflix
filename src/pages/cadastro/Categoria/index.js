import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CadastroCategoria() {
  const initialValue = {
    name: '',
    description: '',
    color: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValue);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://devflixapi.herokuapp.com/categorias';
    fetch(url)
      .then(async (response) => {
        const responseConvertido = await response.json();
        setCategorias([
          ...responseConvertido,
        ]);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(initialValue);
  }

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(inputInfo) {
    // const { getAttribute, value } = inputInfo.target;

    setValue(
      inputInfo.target.getAttribute('name'),
      inputInfo.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          value={values.name}
          name="name"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>loading...</div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={indice}>
            { categoria.name }
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
