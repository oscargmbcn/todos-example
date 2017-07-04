import { connect } from 'react-redux'
import ModifyTodo from '../components/ModifyTodo'
import modifyTodo from '../actions'

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

const mapDispatchToProps = {
  onTodoSubmit: modifyTodo
}


const ModifyTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifyTodo)

export default ModifyTodoContainer
