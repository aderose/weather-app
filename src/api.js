import config from './config';

export default (function api() {
  function search(searchTerm) {
    return fetch(
      `${config.API_URL}?q=${searchTerm}&appid=${config.WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') throw Error('City not found');
        return data;
      })
      .catch((error) => {
        return { error, searchTerm };
      });
  }

  return { search };
})();
