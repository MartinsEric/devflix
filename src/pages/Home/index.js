import React, { useState, useEffect } from 'react';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../Components/PageDefault';

function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setCategorias(categoriasComVideos);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {/* <Menu /> */}

      {!categorias.length && (<div>loading...</div>)}

      {categorias.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={categorias[0].videos[0].titulo}
                url={categorias[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa! "
              />

              <Carousel
                ignoreFirstVideo
                category={categoria}
              />
            </div>
          );
        }

        return (
          <Carousel
            ignoreFirstVideo
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
