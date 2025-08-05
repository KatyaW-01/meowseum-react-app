import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

function Gallery() {
  return (
    <>
    <NavBar />
    <p>Gallery of Cat Art from API</p>
    <Outlet />
    </>
  )
}

export default Gallery