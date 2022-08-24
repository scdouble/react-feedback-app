import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, version, type,  isDisable }) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps ={
  version:'primary',
  isDisable : false,
  type: 'button'
}

Button.propTypes ={
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool
}

export default Button
