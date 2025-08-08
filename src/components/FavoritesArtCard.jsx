import React from "react"

function FavoritesArtCard({art, handleClear}) {
  return (
    <div>
      <img 
      src={art.fullImageUrl}
      alt = {art.title}
      onError = {(e) => {
        e.target.onError = null;
        e.target.src = "/photo_unavailable.jpg" 
      }}
      loading="eager">
      </img>
      <h2>{art.title}</h2>
      <p>{art.artist}</p>
      <button onClick={() => handleClear(art.id)}>Clear</button>
    </div>
  )
}

export default FavoritesArtCard