import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from './components/header';
import Footer from './components/footer';
import { Route, BrowserRouter } from 'react-router-dom'

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/header" component={Header}></Route>
      <Route path="/footer" component={Footer}></Route>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));

serviceWorker.unregister();
