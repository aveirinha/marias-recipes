import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <div className="post-nav-container" id="nav-bar">
    <Link to="/" className="nav-brand">
      Recipes by Maria
    </Link>
    <ul className="nav-item-container">
      <li className="nav-item" id="nav-home">
        <Link to="/">Home</Link>
        <div className="underline"></div>
      </li>

      <li className="nav-item">
        <Link to="/about">About</Link>
        <div className="underline"></div>
      </li>
    </ul>
  </div>
)
export default Nav
