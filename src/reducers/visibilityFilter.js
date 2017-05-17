import { ACTION_SET_VISIBILITY_FILTER, STATE_SHOW_ALL } from '../constants'

const visibilityFilter = (state = STATE_SHOW_ALL, action) => {
  switch (action.type) {
    case ACTION_SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
