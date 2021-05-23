import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ children, name, href }) => {
  return (
    <a
      className="button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
    >
      {children}
      <p>{name}</p>
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Button
