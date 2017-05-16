import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {STATE_SHOW_ALL, STATE_SHOW_COMPLETED, STATE_SHOW_ACTIVE} from '../constants'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case STATE_SHOW_ALL:
      return todos
    case STATE_SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case STATE_SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
