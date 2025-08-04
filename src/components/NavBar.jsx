import React from "react"
import {Link} from "react-router-dom"
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://sdmntpreastus.oaiusercontent.com/files/00000000-578c-61f9-8e48-54ef74d65d7a/raw?se=2025-08-04T23%3A35%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=f6b2f509-01d5-5a18-8f70-7d62d9b3898b&skoid=02b7f7b5-29f8-416a-aeb6-99464748559d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-04T22%3A14%3A05Z&ske=2025-08-05T22%3A14%3A05Z&sks=b&skv=2024-08-04&sig=oS6nF%2BVGnhbJAAO2EthFQOQIx9Sz97Htg3TtO9X0MbM%3D"></img>
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