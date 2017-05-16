import { connect } from 'react-redux'
import Summary from '../components/Summary'

const getActiveNum = (todos) => {
  let active = 0;
  todos.map(t => {
    if ( t.completed == false )
    {
      active++;
    }
  })

  return active
}

const mapStateToProps = (state) => ({
  activeNum: getActiveNum(state.todos),
  completedNum: state.todos.length - getActiveNum(state.todos)
})

const SummaryContainer = connect(
  mapStateToProps,
  {}
)(Summary)

export default SummaryContainer
