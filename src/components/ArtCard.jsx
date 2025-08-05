import React from "react"
import { useEffect, useState } from "react";

function ArtCard({art, artId, handleSave}) {
  const [imageUrl, setImageUrl] = useState(null)
  const [artist, setArtist] = useState(null)

  useEffect(()=> {
    async function fetchArtDetails() {
      try {
        const response = await fetch(art.api_link)
        const data = await response.json()
        const iiifUrl = data.config.iiif_url
        const imageID = data.data.image_id
        const fullImageUrl = `${iiifUrl}/${imageID}/full/843,/0/default.jpg`
        setImageUrl(fullImageUrl)
        const artistDetails = data.data.artist_display
        setArtist(artistDetails)
      } catch (error) {
        console.error("Failed to fetch artwork details", error)
      }
    }
    fetchArtDetails()
  },[art.api_link])
  
  return (
    <div className="art-card">
      <img 
        src={imageUrl}
        alt = {art.title}
        onError = {(e) => {
          e.target.onError = null;
          e.target.src = "/photo_unavailable.jpg" 
        }} >
      </img>
      <h2>{art.title}</h2>
      <p>{artist}</p>
      <button onClick={()=> handleSave(art.id)}>Save</button>
    </div>
  )
}

export default ArtCard