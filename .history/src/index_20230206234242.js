import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } "chak"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider></ChakraProvider>  
);
