import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import {BrowserRouter as Router } from 'react-router-dom';
import './bootstrap.css';
import './fontawesome/css/all.css';

render(
  <Router>
    <App />
    <GlobalStyles/>
  </Router>,
  document.getElementById('root')
);



