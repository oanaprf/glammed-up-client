import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '@@store';
import { theme } from '@@config';

import Main from './src/Main.container';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>
);

export default App;
