import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router'
import TodoApp from './TodoApp';
import './index.css';

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('root')
);
