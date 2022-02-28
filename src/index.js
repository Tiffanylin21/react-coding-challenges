import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import './styles/_dark-mode.scss';
import Routes from './routes';

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root'),
  // document.documentElement.classList.add('main'), // check if needed
  // document.documentElement.classList.add('dark-mode')
);
