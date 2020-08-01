import React from "react"
import { Link } from "gatsby"
import InstagramSVG from "../Icons/InstagramSVG"
import TwitterSVG from "../Icons/TwitterSVG"

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="horizontal-line" />
      <div className="footer-content-container">
        <div className="copyright">
          © {`${new Date().getFullYear()}`} &nbsp;
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Recipes by Maria
          </Link>
        </div>
        <div className="social-icons-container">
          <a href="https://twitter.com/mariamsaveiro">
            <TwitterSVG />
          </a>
          <a href="https://www.instagram.com/aveirinha/">
            <InstagramSVG />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
