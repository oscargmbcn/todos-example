import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import ModifyTodoContainer from '../containers/ModifyTodoContainer'

const ModifyTodoApp = ({params}) => (
  <div>
    <ModifyTodoContainer id={Number(params.id)}/>
    <Link to='/'>&lt;- Volver</Link>
  </div>
)

ModifyTodoApp.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired})
}

export default ModifyTodoApp
