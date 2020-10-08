import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
