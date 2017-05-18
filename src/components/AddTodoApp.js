import React from 'react'
//import Summary from './Summary'
import AddTodo from '../containers/AddTodo'
import { Link } from 'react-router'

const AddTodoApp = () => (
  <div>
    <AddTodo />
    <Link to='/'>&lt;- Volver</Link>
  </div>
)

export default AddTodoApp
