/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Input, SearchIcon, SearchContainer } from './style';

import api from '../../services/api';

function Search({ dispatch, regionFilter }) {
  const filterByContry = (searchValue) => {
    let countries = api('name', searchValue);

    // Search for a country in a specific region
    if (searchValue && regionFilter !== 'All') {
      countries = api('name', searchValue)
        .then((res) => res.filter((contry) => contry.region === regionFilter));
    }

    // Clearing the search filters all countries
    if (!searchValue && regionFilter === 'All') {
      countries = api('all');
    }

    // Clearing the search filters the specific country
    if (!searchValue && regionFilter !== 'All') {
      countries = api('region', regionFilter);
    }

    return {
      type: 'SEARCH_BY_CONTRY',
      searchValue,
      countries,
    };
  };

  return (
    <SearchContainer>
      <label htmlFor="search">
        <SearchIcon className="fas fa-search" />
      </label>
      <Input onInput={(event) => dispatch(filterByContry(event.target.value))} id="search" type="search" placeholder="Pesquisar por um pais..." />
    </SearchContainer>
  );
}

Search.propTypes = {
  regionFilter: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => ({ regionFilter: state.filter }))(Search);
