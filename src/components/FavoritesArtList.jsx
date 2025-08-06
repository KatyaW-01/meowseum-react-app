import React from "react"
import {useOutletContext} from "react-router-dom"
import FavoritesArtCard from "./FavoritesArtCard"

function FavoritesArtList() {
  const {artData} = useOutletContext()
  const ids = localStorage.getItem("artID")
  if (!ids) {
    return <div>No Favorites Saved</div>
  }
  return (
    <>
      {artData.map((art) => (
        <div key={art.id}>
          <FavoritesArtCard art={art}/>
        </div>
      ))}
    </>
  )
}

export default FavoritesArtList