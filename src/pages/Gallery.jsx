import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import useArt from "../hooks/useArt"

function Gallery() {
  const {catArt} = useArt()
  return (
    <>
    <NavBar />
    <p>Gallery of Cat Art from API</p>
    <Outlet context = {{catArt}}/>
    </>
  )
}

export default Gallery