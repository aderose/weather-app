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
      <div class="card-header">
        <h2>${location}</h2>
        <div class="buttons">
          <label class="button-container">
            <input type="radio" name="metric" checked>
            <span class="radio">°C</span>
          </label>
          <label class="button-container">
            <input type="radio" name="metric">
            <span class="radio">°F</span>
          </label>
        </div>
      </div>
      <div class="card-body">
        <div class="summary">
          <h3>
            <span id="temperature">${temperature}</span>°<span id="metric">${measurement}</span>
          </h3>
          <img
            src="https://openweathermap.org/img/wn/${imageCode}@2x.png"
            alt="Weather icon"
          />
        </div>
        <p class="description">${description}</p>
        <div class="extra-details">
          <div class="humidity">
            <i class="fas fa-tint"></i>
            <p>${humidity}%</p>
          </div>
          <div class="wind">
            <i class="fas fa-wind"></i>
            <p>${windSpeed}mph</p>
          </div>
        </div>
      </div>
    `;
  }

  function generateError({ error, message }) {
    return `
      <div class="card-header">
        <h2>${error}</h2>
      </div>
      <div class="card-body error-message">
        ${message}
      </div>
    `;
  }

  function create(error, details) {
    const element = doc.createElement('section');
    element.classList.add('card');
    if (error === undefined) {
      element.innerHTML = generateHtml(details);
    } else {
      element.innerHTML = generateError({ error, message: details });
    }
    return element;
  }

  return { create };
})(document);
