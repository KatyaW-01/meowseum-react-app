import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import FavoritesArtCard from "../components/FavoritesArtCard"
import { useState } from "react"

function Favorites() {
  const storedIds = JSON.parse(localStorage.artID)
  console.log("stored id's:", storedIds)

  const [artData, setArtData] = useState([])

  storedIds.map((id)=> {
    fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
    .then((response) => response.json())
    .then((data)=> {
      const iiifUrl = data.config.iiif_url
      const imageID = data.data.image_id
      const art_data = {
        'fullImageUrl': `${iiifUrl}/${imageID}/full/843,/0/default.jpg`,
        'title': data.data.title,
        'artist': data.data.artist_display
      }
      setArtData(prevArtData => [...prevArtData, art_data])
    })
  })
  
  return (
    <>
    <NavBar />
    <p>The user's favorite art pieces will go here</p>
    <FavoritesArtCard artData = {artData} />
    </>
  )
}

export default Favorites