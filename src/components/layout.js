import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
