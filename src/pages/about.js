import React from "react"

import SEO from "../components/Seo"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import mj from "../images/maria-jump.jpg"

import "../styles/about-page.scss"

const AboutPage = () => (
  <div className="about-page">
    <SEO title="About" />
    <Nav />
    <div className="bio-container">
      <div className="bio-image-container">
        <img className="bio-image" src={mj} alt="" />
      </div>

      <div className="intro-container">
        <div className="container">
          <h1 className="name">Hi I'm Maria</h1>
          <p className="short-bio">i like turning data into cute plots</p>
        </div>
      </div>
    </div>

    <div className="biography container font-header">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Varius sit amet
        mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget
        felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum.
        Nibh praesent tristique magna sit amet purus. Malesuada pellentesque
        elit eget gravida cum. Felis imperdiet proin fermentum leo vel orci
        porta. Diam quam nulla porttitor massa id neque. Porta non pulvinar
        neque laoreet suspendisse interdum consectetur. Odio euismod lacinia at
        quis risus sed. Ut enim blandit volutpat maecenas. Non diam phasellus
        vestibulum lorem sed risus ultricies tristique nulla. Feugiat vivamus at
        augue eget arcu dictum varius duis. Rhoncus mattis rhoncus urna neque
        viverra justo nec ultrices dui. Sed egestas egestas fringilla phasellus
        faucibus scelerisque. Aliquam eleifend mi in nulla posuere. Fringilla ut
        morbi tincidunt augue interdum velit euismod in pellentesque. Aliquet
        eget sit amet tellus. Vivamus arcu felis bibendum ut tristique et
        egestas quis.
      </p>
    </div>

    <Footer />
  </div>
)

export default AboutPage
