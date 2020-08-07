import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  Cards, Card, Informations, Img, ContryNotFound,
} from './style';

function CountryCard({ countries }) {
  const [countriesData, setCountriesData] = useState([]);
  const history = useHistory();
  let countryNotFound = '';

  if (countriesData.length === 0) {
    countryNotFound = <ContryNotFound>Nenhum País Não Encontrado</ContryNotFound>;
  }

  useEffect(() => {
    countries.then((data) => setCountriesData(data));
  }, [countries]);

  const handleDetail = (country) => {
    localStorage.setItem('country', JSON.stringify(country));
    history.push('/country/detail');
  };

  return (
    <Cards>
      {
        countriesData.map((country) => (
          <Card key={country.id} onClick={() => handleDetail(country)}>
            <Img src={country.flag} alt={`${country.name} Flag`} />
            <Informations>
              <h1>{country.name}</h1>
              <p>
                <strong>População:</strong>
                {' '}
                <span>{Intl.NumberFormat('pt-BR', {}).format(country.population)}</span>
              </p>
              <p>
                <strong>Região:</strong>
                {' '}
                <span>{country.region}</span>
              </p>
              <p>
                <strong>Capital:</strong>
                {' '}
                <span>{country.capital || 'Sem Capital'}</span>
              </p>
            </Informations>
          </Card>
        ))
      }
      {countryNotFound}
    </Cards>
  );
}

CountryCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  countries: PropTypes.array.isRequired,
};

export default connect((state) => ({
  countries: state.countries,
}))(CountryCard);
