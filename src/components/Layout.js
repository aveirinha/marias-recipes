import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <div className="container main-content">
        <main>{children}</main>
      </div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
