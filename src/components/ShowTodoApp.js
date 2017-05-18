import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import ShowTodoContainer from '../containers/ShowTodoContainer'

const ShowTodoApp = (props) => (
  <div>
    <ShowTodoContainer id={Number(props.params.id)}/>
    <Link to='/'>&lt;- Volver</Link> { ' ' }
    <Link to={'/modify-todo/'+props.params.id}>Modificar</Link>
  </div>
)

ShowTodoApp.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired})
}

export default ShowTodoApp
