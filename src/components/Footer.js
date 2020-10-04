import React from "react"
import { Link } from "gatsby"

import InstagramSVG from "../Icons/InstagramSVG"
import TwitterSVG from "../Icons/TwitterSVG"

import "./Footer.scss"

const Footer = () => {
  const socials = [
    { icon: <TwitterSVG />, link: "https://twitter.com/mariamsaveiro" },
    { icon: <InstagramSVG />, link: "https://www.instagram.com/aveirinha" },
  ]

  return (
    <div className="footer-container font-header">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            © {`${new Date().getFullYear()}`}{" "}
            <Link to="/">Recipes by Maria</Link>
          </div>

          <div className="social-icons-container">
            {socials.map(({ link, icon }) => (
              <a href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
