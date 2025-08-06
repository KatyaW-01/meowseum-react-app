import React from "react"

function FavoritesArtCard({art}) {
  return (
    <div>
      <img 
      src={art.fullImageUrl}
      alt = {art.title}
      onError = {(e) => {
        e.target.onError = null;
        e.target.src = "/photo_unavailable.jpg" 
      }}>
      </img>
      <h2>{art.title}</h2>
      <p>{art.artist}</p>
    </div>
  )
}

export default FavoritesArtCard