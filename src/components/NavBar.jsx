import React from "react"
import {Link} from "react-router-dom"
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/feline-fine-art-logo.png"></img>
      </div>
      <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/gallery ">Gallery</Link>
        <Link to="/favorites" >Favorites</Link>
      </div>
    </nav>
  )
}

export default NavBar