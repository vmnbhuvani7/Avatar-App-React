import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'

const context = React.createContext();

const routing = (
  <BrowserRouter>
      <div>
        <Route exact path="/" component={App}></Route>
      </div>
    
  </BrowserRouter>
);

ReactDOM.render(routing,document.getElementById('root'));

serviceWorker.unregister();
