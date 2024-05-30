import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Select, SelectContainer, SelectOptions,
} from './style';

import api from '../../services/api';

function RegionFilter({ dispatch, searchValue }) {
  const [options, setOptions] = useState(false);
  const [filteredRegion, setFilteredRegion] = useState('');

  const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

  function capitalizeFirstLetter(str) {
    return str.replace(/\b[a-z]/g, function(match) {
      return match.charAt(0).toUpperCase() + match.slice(1);
    });
  }

  const toggleOptions = () => {
    setOptions(!options);
  };

  const setRegionFilter = (index) => {
    setFilteredRegion(regions[index]);
    toggleOptions();

    let countries = api('region', regions[index]);

    if (regions[index] === 'all') {
      countries = api('all');
    }

    if (searchValue && regions[index] !== 'all') {
      countries = api('name', searchValue)
        .then((res) => res.filter(
          (contry) => contry.region === regions[index],
        ));
    }

    return {
      type: 'FILTER_BY_REGION',
      filter: regions[index],
      countries,
    };
  };

  return (
    <SelectContainer
      selectToggle={options.toString()}
      onClick={options ? toggleOptions : () => {}}
    >
      <Select onClick={toggleOptions}>
        <span>{capitalizeFirstLetter(filteredRegion) || 'Filtrar por Continente'}</span>

        <Select.Icon className={`fas fa-angle-${options ? 'down' : 'up'}`} />
      </Select>

      <SelectOptions
        opacity={options.toString()}
        visibility={options.toString()}
      >
        {regions.map((region, index) => (
          <SelectOptions.Item
            key={index}
            role="textbox"
            onClick={() => dispatch(setRegionFilter(index))}
          >
            {capitalizeFirstLetter(region)}
          </SelectOptions.Item>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
}

RegionFilter.propTypes = {
  searchValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect((state) => ({
  searchValue: state.searchValue,
}))(RegionFilter);
