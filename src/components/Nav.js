import React from "react"
import { Link } from "gatsby"
import "./Nav.scss"

const Nav = () => (
  <div className="nav-container">
    <div className="container nav-content font-header">
      <Link to="/" className="nav-brand">
        Recipes by Maria
      </Link>

      <ul className="nav-item-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  </div>
)
export default Nav
