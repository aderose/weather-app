import pubsub from './pubsub';

export default class SearchForm {
  constructor({ formId, inputId, barId, errorId }) {
    this.searchForm = document.querySelector(formId);
    this.search = document.querySelector(inputId);
    this.searchBar = document.querySelector(barId);
    this.error = document.querySelector(errorId);
  }

  isValidInput() {
    if (this.search.validity.valid && this.search.value.length > 0) {
      this.searchBar.classList.remove('invalid');
      this.error.textContent = '';
      return true;
    }
    this.searchBar.classList.add('invalid');
    this.error.textContent = 'Please provide a city name only.';
    return false;
  }

  listen() {
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.isValidInput()) return;
      pubsub.publish('search', this.search.value);
    });
  }
}
