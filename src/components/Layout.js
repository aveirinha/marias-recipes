import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Nav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1300,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
