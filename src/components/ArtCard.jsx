import React from "react"
import { useEffect, useState } from "react";

function ArtCard({art, handleSave}) {
  return (
    <div className="art-card">
      <img 
        src={art.image}
        alt = {art.title}
        onError = {(e) => {
          e.target.onError = null;
          e.target.src = "/photo_unavailable.jpg" 
        }} >
      </img>
      <h2>{art.title}</h2>
      <p>{art.artist}</p>
      <button onClick={()=> handleSave(art.id)}>Save</button>
    </div>
  )
}

export default ArtCard