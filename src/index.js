import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageState from './context/language/LanguageState';
import HomeState from './context/sidebar/HomeState';




ReactDOM.render(

  <BrowserRouter>
    <LanguageState   >
      <HomeState>
        <App />
      </HomeState>
    </LanguageState>
  </BrowserRouter>

  ,
  document.getElementById('root')
);


