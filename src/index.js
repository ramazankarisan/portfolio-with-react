import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SidebarState from './context/sidebar/SidebarState';



ReactDOM.render(
  <BrowserRouter>
    <SidebarState>
      <App />
    </SidebarState>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


