import React from 'react'
//import Summary from './Summary'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SummaryContainer from '../containers/SummaryContainer'

const App = () => (
  <div>
    <AddTodo />
    <SummaryContainer />
    <p><a href="#">Add Todo (full)</a></p>
    <VisibleTodoList />

  </div>
)

export default App
