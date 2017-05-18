import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodoSimple } from '../actions'

const AddTodoSimple = ( { dispatch } ) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodoSimple(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo (quick)
        </button>
      </form>
    </div>
  )
}

AddTodoSimple.propTypes = {
  dispatch: PropTypes.func.isRequired
}


const AddTodoSimpleCnt = connect()(AddTodoSimple)

export default AddTodoSimpleCnt
