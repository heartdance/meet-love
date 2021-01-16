import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home';
import Meet from './pages/meet';
import Know from './pages/know';
import Love from './pages/love';
import Forget from './pages/forget';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/meet' exact component={Meet} />
      <Route path='/know' exact component={Know} />
      <Route path='/love' exact component={Love} />
      <Route path='/forget' exact component={Forget} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
