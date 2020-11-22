import card from './card';

document.querySelector('.content').appendChild(
  card.create({
    location: 'London, UK',
    temperature: 30,
    measurement: 'C',
    imageCode: '09n',
    description: 'Drizzling rain.',
    humidity: 100,
    windSpeed: 30,
  })
);
