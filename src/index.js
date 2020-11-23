import card from './card';
import SearchForm from './SearchForm';
import pubsub from './pubsub';

window.addEventListener('load', () => {
  const content = document.querySelector('#content');

  // create and display a weather card with the provided details
  function displayCard(details) {
    content.innerHTML = '';
    content.appendChild(card.create(details));
  }

  // displayCard({
  //   location: 'London, UK',
  //   temperature: 30,
  //   measurement: 'C',
  //   imageCode: '09n',
  //   description: 'Drizzling rain.',
  //   humidity: 100,
  //   windSpeed: 30,
  // });

  // create a form object and listen
  const searchForm = new SearchForm({
    formId: '#search-form',
    inputId: '#search',
    barId: '#search-bar',
    errorId: '#error',
  });

  searchForm.listen();

  pubsub.subscribe('search', (search) => {
    console.log(search);
  });
});
