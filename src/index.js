import card from './card';
import SearchForm from './SearchForm';
import pubsub from './pubsub';
import config from './config';

window.addEventListener('load', () => {
  const content = document.querySelector('#content');

  // create and display a weather card with the provided details
  function displayCard(data) {
    content.innerHTML = '';
    const weather = data.weather[0];
    content.appendChild(
      card.create({
        location: `${data.name}, ${data.sys.country}`,
        temperature: Math.round(data.main.temp - 273.15),
        measurement: 'C',
        imageCode: weather.icon,
        description: weather.description,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 2.23694),
      })
    );
  }

  async function fetchData(search) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${config.WEATHER_API_KEY}`
    ).then((response) => response.json());
  }

  async function processSearch(searchTerm) {
    try {
      const data = await fetchData(searchTerm);
      displayCard(data);
    } catch (err) {
      console.log('City not found.');
    }
  }

  // create a form object and listen
  const searchForm = new SearchForm({
    formId: '#search-form',
    inputId: '#search',
    barId: '#search-bar',
    errorId: '#error',
  });

  searchForm.listen();

  pubsub.subscribe('search', processSearch);
});
