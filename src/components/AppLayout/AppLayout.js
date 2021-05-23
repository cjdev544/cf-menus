import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import './AppLayout.scss'

const AppLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Central Food Menus</title>
      </Helmet>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
