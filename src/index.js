import displayManager from './displayManager';
import SearchForm from './SearchForm';
import api from './api';
import pubsub from './pubsub';

function controller() {
  // search api for searchterm and display card for that data
  function processSearch(searchTerm) {
    api.search(searchTerm).then((data) => {
      displayManager.displayCard(data);
    });
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
}

window.addEventListener('load', controller);
