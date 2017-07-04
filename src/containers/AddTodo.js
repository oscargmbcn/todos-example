import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ( { dispatch } ) => {
  let text, priority, category

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.value.trim()) {
      return
    }
    dispatch(addTodo(text.value, priority.value, category.value))
    text.value = ''
    priority.value = ''
    category.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Text: <input ref={a => text = a} /></p>
        <p>Priority: <input ref={a => priority = a} /></p>
        <p>Category: <input ref={a => category = a} /></p>
        <p><button type="submit">
          Add Todo
        </button></p>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const AddTodoCnt = connect()(AddTodo)

export default AddTodoCnt
