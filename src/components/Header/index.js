// import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Heading,
  MoonIcon,
} from './style';

function Header({ toggleTheme }) {
  return (
    <Heading>
      <Container>
        <Heading.Title>Onde no Mundo?</Heading.Title>
        <MoonIcon onClick={toggleTheme}>
          <i className="far fa-moon" />
          <span>Modo Escuro</span>
        </MoonIcon>
      </Container>
    </Heading>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
