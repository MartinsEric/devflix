import config from '../config';

const URL_CATEGORIES_WITH_VIDEOS = `${config.URL}/categorias?_embed=videos`;
const URL_CATEGORIES = `${config.URL}/categorias`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_WITH_VIDEOS)
    .then(async (response) => {
      const categorias = await response.json();
      return categorias;
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      const categorias = await response.json();
      return categorias;
    });
}

export default {
  getAllWithVideos,
  getAll,
};
