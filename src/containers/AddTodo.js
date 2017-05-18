import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ( { dispatch } ) => {
  let text, priority, category

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!text.value.trim()) {
          return
        }
        dispatch(addTodo(text.value, priority.value, category.value))
        text.value = ''
        priority.value = ''
        category.value = ''
      }}>
        <p>Text: <input ref={node => {
          text = node
        }} /></p>
        <p>Priority: <input ref={node => {
          priority = node
        }} /></p>
        <p>Category: <input ref={node => {
          category = node
        }} /></p>
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
