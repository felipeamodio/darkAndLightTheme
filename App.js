import React from 'react';
import Home from './src/Home';
import {useColorScheme} from 'react-native';

import {ThemeProvider} from 'styled-components';
import themes from './src/Theme'

export default function App() {
  // vai devolver light, dark ou null
  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme] || theme.dark

  return (
    <>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    </>
  );
}

