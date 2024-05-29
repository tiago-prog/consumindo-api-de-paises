import { createStore } from 'redux';
import api from '../../services/api';

const INITIAL_STATE = {
  filter: 'All',
  searchValue: '',
  countries: api(),
  currentTheme: '',
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'FILTER_BY_REGION') {
    return {
      ...state,
      filter: action.filter,
      countries: action.countries,
    };
  }

  if (action.type === 'SEARCH_BY_CONTRY') {
    return {
      ...state,
      searchValue: action.searchValue,
      countries: action.countries,
    };
  }

  if (action.type === 'TOGGLE_THEME') {
    return {
      ...state,
      currentTheme: action.currentTheme,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
