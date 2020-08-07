import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './config/themes';
import store from './pages/store';
import Routes from './routes';

import Container from './components/Container';
import Header from './components/Header';

import '@fortawesome/fontawesome-free/css/all.css';
import GlobalStyle from './GlobalStyle';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    const currentTheme = theme.title === 'dark' ? light : dark;
    setTheme(currentTheme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={JSON.parse(localStorage.getItem('theme')) || light}>
        <Header toggleTheme={toggleTheme} />
        <Container>
          <GlobalStyle />
          <Routes />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
