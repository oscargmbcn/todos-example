import { connect } from 'react-redux'
import Summary from '../components/Summary'

const getActiveNum = (todos) => {
  let active = todos.reduce( (acumulado, tActual) => {
    let calculado = acumulado

    if ( tActual.completed === false ) {
      calculado++
    }

    return calculado
  }, 0)

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
