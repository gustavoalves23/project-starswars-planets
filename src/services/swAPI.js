const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const swAPI = () => new Promise((resolve, reject) => {
  fetch(URL)
    .then((result) => result.json())
    .then((obj) => resolve(obj.results))
    .catch((error) => reject(error));
});

export default swAPI;
