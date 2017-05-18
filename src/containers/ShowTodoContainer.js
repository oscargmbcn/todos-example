import { connect } from 'react-redux'
import ShowTodo from '../components/ShowTodo'

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

const ShowTodoContainer = connect(
  mapStateToProps,
  {}
)(ShowTodo)

export default ShowTodoContainer
