import React, { useEffect, useState } from 'react';
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
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return JSON.parse(storedTheme);
      }
      return light;
    } catch (error) {
      console.error('Error retrieving theme from localStorage:', error);
      return light;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme => (theme.title === 'light' ? dark : light));
  };


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
