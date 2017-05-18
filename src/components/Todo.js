import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Todo = ({ onClick, completed, text, id }) => (
  <li><span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </span>{' '}
  <Link to={'/show-todo/' + id}>...</Link>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo
