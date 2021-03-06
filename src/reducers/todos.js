import { ACTION_ADD_TODO, ACTION_MODIFY_TODO, ACTION_TOGGLE_TODO } from '../constants'

const newTodo = (action) => {
  return {
    id: action.id,
    text: action.text,
    priority: action.priority,
    category: action.category,
    completed: false
  }
}

const toogleTodo = (t, action) => {
  if (t.id !== action.id) {
    return t
  }
  else {
    return {
      ...t,
      completed: !t.completed
    }
  }
}

const modifyTodo = (t, action) => {
  if (t.id !== action.id) {
    return t
  }
  else {
    return {
      id: action.id,
      text: action.text,
      priority: action.priority,
      category: action.category,
      completed: action.completed
    }
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case ACTION_ADD_TODO:
      return [
        ...state,
        newTodo(action)
      ]
    case ACTION_TOGGLE_TODO:
      return state.map(t =>
        toogleTodo(t, action)
      )
    case ACTION_MODIFY_TODO:
      return state.map(t =>
        modifyTodo(t, action)
      )
    default:
      return state
  }
}

export default todos
