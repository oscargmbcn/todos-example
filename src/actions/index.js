import {ACTION_ADD_TODO, ACTION_MODIFY_TODO, ACTION_TOGGLE_TODO, ACTION_SET_VISIBILITY_FILTER} from '../constants'

let nextTodoId = 0

export const addTodoSimple = (text) => ({
  type: ACTION_ADD_TODO,
  id: nextTodoId++,
  text
})

export const addTodo = (text, priority, category) => ({
  type: ACTION_ADD_TODO,
  id: nextTodoId++,
  text,
  priority,
  category
})

export const modifyTodo = (id, text, priority, category, completed) => ({
  type: ACTION_MODIFY_TODO,
  id,
  text,
  priority,
  category,
  completed
})

export const setVisibilityFilter = (filter) => ({
  type: ACTION_SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id) => ({
  type: ACTION_TOGGLE_TODO,
  id
})
