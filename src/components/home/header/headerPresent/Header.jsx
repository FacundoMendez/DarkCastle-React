import React from 'react'
import backgroundVideo from "./src/videos/backgroundPrincipal.mp4"
import "./header.css"

const Header = () => {
  return (
    <div className="container">
        <video className="container__background" src={backgroundVideo} autoPlay loop muted type="video/mp4"></video>
    </div>
  )
}

export default Header