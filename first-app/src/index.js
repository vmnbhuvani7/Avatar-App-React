import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from './components/header';
import Footer from './components/footer';
import { Route, BrowserRouter } from 'react-router-dom'

const context = React.createContext();
export const CtxConsumer = context.Consumer;
const animals = ['lion', 'elephont', 'snack'];

const routing = (
  <BrowserRouter>
    <context.Provider value={{animals: animals}}>
      <div>
        <Route exact path="/" component={App}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/footer" component={Footer}></Route>
      </div>
    </context.Provider>
    
  </BrowserRouter>
);

ReactDOM.render(routing,document.getElementById('root'));

serviceWorker.unregister();
