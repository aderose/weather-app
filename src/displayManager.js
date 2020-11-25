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
      // convert from kelvin to celcius
      temperature: Math.round(data.main.temp - 273.15),
      measurement: 'C',
      imageCode: weather.icon,
      description: weather.description,
      humidity: data.main.humidity,
      // convert from m/s to mph
      windSpeed: Math.round(data.wind.speed * 2.23694),
    });
  }

  // update the temperature display when the radio choice is changed
  function listenForChange() {
    document.querySelectorAll('input[name="metric"]').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        card.updateTemperature(e.target.nextElementSibling.textContent);
      });
    });
  }

  // display the newly created card and listen for changes
  function displayCard(data) {
    display.appendChild(createCard(data));
    listenForChange();
  }

  function toggleLoading(isLoading) {
    display.innerHTML = '';
    if (isLoading) {
      const image = document.createElement('img');
      image.setAttribute('src', '../assets/loading.gif');
      image.setAttribute('alt', 'loading');
      display.appendChild(image);
    }
  }

  return { displayCard, toggleLoading };
})();
