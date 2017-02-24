import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router'
import './index.css';
import App from './App.js'
//import Menu from './Task_1.js'
var {Provider} = require("react-redux"); 
var Todo = require("./components/Todo")
var store = require('./store/configure.js').configure();
ReactDOM.render(
  <Provider store = {store}>
  <Todo />
  </Provider>,
  document.getElementById('root')
);
