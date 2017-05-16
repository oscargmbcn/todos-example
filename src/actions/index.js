import {ACTION_ADD_TODO, ACTION_TOGGLE_TODO, ACTION_SET_VISIBILITY_FILTER} from '../constants'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: ACTION_ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: ACTION_SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id) => ({
  type: ACTION_TOGGLE_TODO,
  id
})
