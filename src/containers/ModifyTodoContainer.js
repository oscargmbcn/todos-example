import { connect } from 'react-redux'
import ModifyTodo from '../components/ModifyTodo'

const getTodoById = (listTodos, id) => {
  return listTodos.find( (todoI) => {
    if( todoI.id === id ) {
      return true
    }
    else {
      return false
    }
  })
}

const mapStateToProps = (state, ownProps) => ( {
  todo: getTodoById(state.todos, ownProps.id)
} )

const ModifyTodoContainer = connect(
  mapStateToProps,
  {}
)(ModifyTodo)

export default ModifyTodoContainer
