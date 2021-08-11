import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import GlobalStyles from './global/Styles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById('root'),
);
