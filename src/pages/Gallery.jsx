import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import useArt from "../hooks/useArt"

function Gallery() {
  const {catArt} = useArt()
  return (
    <>
    <NavBar />
    <h1>Gallery </h1>
    <Outlet context = {{catArt}}/>
    </>
  )
}

export default Gallery