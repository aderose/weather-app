import card from './card';

window.addEventListener('load', () => {
  const content = document.querySelector('.content');

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
});
