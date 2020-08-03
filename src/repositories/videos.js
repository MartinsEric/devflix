import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(newVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newVideo),
  })
    .then(async (response) => {
      const categorias = await response.json();
      return categorias;
    });
}

export default {
  create,
};
