import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import reducers from './reducers'
import AddTodoApp from './components/AddTodoApp'
import MainApp from './components/MainApp'
import ShowTodoApp from './components/ShowTodoApp'
import ModifyTodoApp from './components/ModifyTodoApp'

const store = createStore(reducers, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/add-todo' component={ AddTodoApp } />
      <Route path='/' component={ MainApp } />
      <Route path='/show-todo/:id' component={ ShowTodoApp } />
      <Route path='/modify-todo/:id' component={ ModifyTodoApp } />
    </Router>
  </Provider>,
  document.getElementById('root')
)
