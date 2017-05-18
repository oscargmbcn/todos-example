import React from 'react'
//import Summary from './Summary'
import AddTodoSimple from '../containers/AddTodoSimple'
import VisibleTodoList from '../containers/VisibleTodoList'
import SummaryContainer from '../containers/SummaryContainer'
import { Link } from 'react-router'

const MainApp = () => (
  <div>
    <AddTodoSimple />
    <SummaryContainer />
    <p><Link to='/add-todo'>Add Todo (full)</Link></p>
    <VisibleTodoList />
  </div>
)

export default MainApp
