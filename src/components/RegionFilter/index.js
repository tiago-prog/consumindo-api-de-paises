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

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const toggleOptions = () => {
    setOptions(!options);
  };

  const setRegionFilter = (index) => {
    setFilteredRegion(regions[index]);
    toggleOptions();

    const regionLowerCase = regions[index].toLowerCase();
    let countries = api('region', regionLowerCase);

    if (regionLowerCase === 'all') {
      countries = api('all');
    }

    if (searchValue && regionLowerCase !== 'all') {
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
        <span>{filteredRegion || 'Filtrar por Continente'}</span>

        <Select.Icon className={`fas fa-angle-${options ? 'down' : 'up'}`} />
      </Select>

      <SelectOptions
        opacity={options.toString()}
        visibility={options.toString()}
      >
        {regions.map((region, index) => (
          <SelectOptions.Item
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            role="textbox"
            onClick={() => dispatch(setRegionFilter(index))}
          >
            {region}
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
