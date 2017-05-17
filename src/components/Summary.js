import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Summary = ({ activeNum, completedNum }) => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All ({ activeNum + completedNum })
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active ({ activeNum })
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed ({ completedNum })
    </FilterLink>
  </p>
)

Summary.propTypes = {
  activeNum: PropTypes.number.isRequired,
  completedNum: PropTypes.number.isRequired
}

export default Summary
