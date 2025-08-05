import React from "react"
import NavBar from "../components/NavBar"

function Favorites() {
  const storedIds = JSON.parse(localStorage.artID)
  console.log("stored id's:", storedIds)
  return (
    <>
    <NavBar />
    <p>The user's favorite art pieces will go here</p>
    </>
  )
}

export default Favorites