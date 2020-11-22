export default (function card(doc) {
  function generateHtml({
    location,
    temperature,
    measurement,
    imageCode,
    description,
    humidity,
    windSpeed,
  }) {
    return `
      <h2>${location}</h2>
      <div class="card-body">
        <div class="summary">
          <h3>${temperature}°${measurement}</h3>
          <img
            src="https://openweathermap.org/img/wn/${imageCode}@2x.png"
            alt="Weather icon"
          />
        </div>
        <div class="description">
          <p>${description}</p>
        </div>
        <div class="extra-details">
          <div class="humidity">
            <i class="fas fa-tint"></i>
            <p>${humidity}%</p>
          </div>
          <div class="wind">
            <i class="fas fa-wind"></i>
            <p>${windSpeed}mph</p>
          </div>
        </div>`;
  }

  function create({
    location,
    temperature,
    measurement,
    imageCode,
    description,
    humidity,
    windSpeed,
  }) {
    const element = doc.createElement('section');
    element.classList.add('card');
    element.innerHTML = generateHtml({
      location,
      temperature,
      measurement,
      imageCode,
      description,
      humidity,
      windSpeed,
    });
    return element;
  }

  return { create };
})(document);
