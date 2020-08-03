import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriesTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((response) => {
        setCategorias(response);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const categoria = categorias
      .find((c) => c.titulo.toLowerCase() === values.categoria.toLowerCase());

    videoRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoria.id,
    })
      .then(() => {
        console.log('vídeo cadastrado com sucesso!');
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do Vídeo"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoriesTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
