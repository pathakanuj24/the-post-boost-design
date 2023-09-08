import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import App from './App'; // Replace with your main app component

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: true, // Enable system color mode
        }}
      >
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
