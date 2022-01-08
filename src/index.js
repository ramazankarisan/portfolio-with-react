import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import HomeState from './context/sidebar/HomeState';




ReactDOM.render(
  <BrowserRouter>
    <HomeState>
      <App />
    </HomeState>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


