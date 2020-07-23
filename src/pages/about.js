import React from "react"
import SEO from "../components/Seo"
import Nav from "../components/Nav"
import ppl from "../images/woman.jpg"

const AboutPage = () => (
  <div>
    <SEO title="About" />
    <Nav />
    <div className = "bio-container">
      <img className="bio-image" src={ppl} alt='' />
      <div className="containy">
        <h1 className="name">Hi I'm Julia</h1> 
        <h1 className="short-bio">An entrepenuer, blogger, foodie, and life-style guru dedicated to helping you become the best person you can be.</h1> 
      </div>
    </div>
    
    <div className="biography-container">
      <p><span>L</span> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam eget felis. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nibh praesent tristique magna sit amet purus. Malesuada pellentesque elit eget gravida cum. Felis imperdiet proin fermentum leo vel orci porta. Diam quam nulla porttitor massa id neque. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Odio euismod lacinia at quis risus sed. Ut enim blandit volutpat maecenas. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Feugiat vivamus at augue eget arcu dictum varius duis. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Sed egestas egestas fringilla phasellus faucibus scelerisque. Aliquam eleifend mi in nulla posuere. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Aliquet eget sit amet tellus. Vivamus arcu felis bibendum ut tristique et egestas quis.</p>

      <p>Nulla porttitor massa id neque aliquam. Ut aliquam purus sit amet luctus. Elit duis tristique sollicitudin nibh sit amet. Leo vel orci porta non pulvinar neque. Ut sem nulla pharetra diam. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Purus faucibus ornare suspendisse sed nisi lacus. Lacus sed viverra tellus in hac habitasse. In nulla posuere sollicitudin aliquam ultrices. Magna etiam tempor orci eu. Eu ultrices vitae auctor eu augue ut. Sit amet mauris commodo quis imperdiet. Convallis aenean et tortor at risus viverra. Ac tortor dignissim convallis aenean et tortor at. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Massa tincidunt dui ut ornare lectus. Massa tincidunt dui ut ornare lectus sit amet est placerat.</p>
      
      <p>Nibh ipsum consequat nisl vel pretium lectus quam id. Arcu ac tortor dignissim convallis aenean et tortor. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Pulvinar elementum integer enim neque. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Nisl pretium fusce id velit ut tortor. Fermentum et sollicitudin ac orci phasellus. Quam adipiscing vitae proin sagittis nisl rhoncus. Blandit libero volutpat sed cras ornare. Id faucibus nisl tincidunt eget. Sed viverra ipsum nunc aliquet. Et ligula ullamcorper malesuada proin libero nunc consequat. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Blandit aliquam etiam erat velit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Semper eget duis at tellus at urna condimentum mattis pellentesque. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Scelerisque varius morbi enim nunc faucibus a. Vulputate dignissim suspendisse in est ante.</p>
    </div>
  </div>
)

export default AboutPage
