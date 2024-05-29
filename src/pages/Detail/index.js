import React from 'react';
import { Link } from 'react-router-dom';
import {
  Details, Group, Flag, Item, BorderCountry,
} from './style';
import { object } from 'prop-types';

function CountryDetails() {
  const {
    flag,
    name,
    nativeName,
    population,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = JSON.parse(
    localStorage.getItem('country'),
  );

  return (
    <Details>
      <Link to="/">
        <Details.Back>
          <Details.Back.Icon className="fas fa-long-arrow-alt-left" />
          {' '}
          Voltar
        </Details.Back>
      </Link>
      <Details.Content>
        <Flag src={flag} />
        <Group>
          <Group.Title>{name}</Group.Title>
          <Group.Items>
            <div>
              <Item>
                Nome Nativo:
                {' '}
                {Object.entries(nativeName).map((name) => (
                  <span key={name[1].common}>
                   {name[1].official} ({name[1].common})
                  </span>
                ))}
              </Item>
              <Item>
                População:
                {' '}
                <span>{Intl.NumberFormat('pt-BR', {}).format(population)}</span>
              </Item>
              <Item>
                Sub-Região:
                {' '}
                <span>{subregion}</span>
              </Item>
              <Item>
                Capital:
                {' '}
                <span>{capital || 'Sem Capital'}</span>
              </Item>
            </div>
            <div>
              <Item>
                Domínios:
                {' '}
                {topLevelDomain.map((domain) => (<span key={domain}>{domain}</span>))}
              </Item>
              <Item>
                Moedas:
                {' '}
                {Object.entries(currencies).map((currencie) => (
                  <span key={currencie[1].name}>
                   {currencie[1].name} ({currencie[1].symbol})
                  </span>
                ))}
              </Item>
              <Item>
                Idiomas:
                {' '}
                {Object.entries(languages).map((language, index) =>  (
                  <span key={index}>
                    {language[1]}
                  </span>
                ))}
              </Item>
            </div>
          </Group.Items>
          <Group.BorderContries>
            <Group.BorderContries.Title>Países fronteiriços:</Group.BorderContries.Title>
            <div>
              { borders ? borders.map((country) => (
                <BorderCountry key={country}>
                  {country}
                </BorderCountry>
              )) : <BorderCountry>Não faz fronteira...</BorderCountry>}
            </div>
          </Group.BorderContries>
        </Group>
      </Details.Content>
    </Details>
  );
}

export default CountryDetails;
