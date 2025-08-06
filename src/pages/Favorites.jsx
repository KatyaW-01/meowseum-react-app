import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

function Favorites() {
  const storedIds = JSON.parse(localStorage.getItem("artID"))

  const [artData, setArtData] = useState([])

  useEffect(()=> {
    if (storedIds !== null) {
      storedIds.map((id)=> {
        fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
        .then((response) => response.json())
        .then((data)=> {
          const iiifUrl = data.config.iiif_url
          const imageID = data.data.image_id
          const art_data = {
            'id': id,
            'fullImageUrl': `${iiifUrl}/${imageID}/full/843,/0/default.jpg`,
            'title': data.data.title,
            'artist': data.data.artist_display
          }
          setArtData(prev => {
            const alreadyExists = prev.some(art => art.id === art_data.id)
            return alreadyExists ? prev : [...prev, art_data]
          })

        })    
      })
    }
  },[])

  function handleClear() {
    localStorage.removeItem("artID")
    setArtData([])
  }

  console.log(storedIds)

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