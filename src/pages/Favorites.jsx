import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import useArt from "../hooks/useArt"

function Favorites() {
  const {artData, setArtData} = useArt()

  function handleClear() {
    localStorage.removeItem("artID")
    setArtData([])
  }

  return (
    <>
    <NavBar />
    <h2>Your Personal Gallery</h2>
    <button onClick={() => handleClear()}>Clear Favorites</button>
    <Outlet context={{artData}}/>
    </>
  )
}

export default Favorites