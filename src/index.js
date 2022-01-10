import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageState from './context/language/LanguageState';
import HomeState from './context/sidebar/HomeState';
import ThemeState from './context/theme/ThemeState';




ReactDOM.render(

  <BrowserRouter>
    <ThemeState>
      <LanguageState   >
        <HomeState>
          <App />
        </HomeState>
      </LanguageState>
    </ThemeState>
  </BrowserRouter>

  ,
  document.getElementById('root')
);


