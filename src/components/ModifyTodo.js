import React from 'react'
import PropTypes from 'prop-types'

const ModifyTodo = ( { todo } ) => {

  return (
    <div>
        <p><b>Id:</b> {todo.id}</p>
        <p><b>Text:</b> <input type='text' defaultValue={todo.text}/></p>
        <p><b>Priority:</b> <input type='text' defaultValue={todo.priority}/></p>
        <p><b>Category:</b> <input type='text' defaultValue={todo.category}/></p>
        <p><b>Completed:</b> <input type='checkbox' defaultChecked={todo.completed}/></p>
    </div>
  )
}

ModifyTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string,
    category: PropTypes.number,
    completed: PropTypes.bool.isRequired
  })
}

export default ModifyTodo
