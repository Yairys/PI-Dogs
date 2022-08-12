import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'
import axios from 'axios';



axios.defaults.baseURL= process.env.REACT_APP_API || "hhttp://localhost:3001"

ReactDOM.render(
  <Provider store={store}> {/* // todo lo que esta dentro del provider tiene acceso al store de redux */}

  <BrowserRouter>
  <App />
  
  </BrowserRouter>

  </Provider>
  ,
  document.getElementById('root')
);


