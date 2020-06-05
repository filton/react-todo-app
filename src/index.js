import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Redirect exact from="/" to="/all" />
      <Route path="/:filter" component={App} /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
