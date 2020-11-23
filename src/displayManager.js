import card from './card';

export default (function displayManager() {
  const display = document.querySelector('#content');

  // create a weather or error card
  function createCard(data) {
    if (data.error !== undefined) {
      return card.create(
        data.error,
        `Can't find any results for "${data.searchTerm}".`
      );
    }
    const weather = data.weather[0];
    return card.create(undefined, {
      location: `${data.name}, ${data.sys.country}`,
      temperature: Math.round(data.main.temp - 273.15),
      measurement: 'C',
      imageCode: weather.icon,
      description: weather.description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 2.23694),
    });
  }

  // display the newly created card
  function displayCard(data) {
    display.innerHTML = '';
    display.appendChild(createCard(data));
  }

  return { displayCard };
})();
