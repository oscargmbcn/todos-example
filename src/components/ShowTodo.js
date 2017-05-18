import React from 'react'
import PropTypes from 'prop-types'

const ShowTodo = ( { todo } ) => {

  return (
    <div>
        <p><b>Id:</b> {todo.id}</p>
        <p><b>Text:</b> {todo.text}</p>
        <p><b>Priority:</b> {todo.priority}</p>
        <p><b>Category:</b> {todo.category}</p>
    </div>
  )
}

ShowTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string,
    category: PropTypes.number
  })
}

export default ShowTodo
