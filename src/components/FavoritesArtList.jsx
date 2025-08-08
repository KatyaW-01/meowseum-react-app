import React from "react"
import {useOutletContext} from "react-router-dom"
import FavoritesArtCard from "./FavoritesArtCard"

function FavoritesArtList() {
  const {artData, setArtData} = useOutletContext()
  const ids = localStorage.getItem("artID")

  function handleClear(id) {
    const storedIds = JSON.parse(localStorage.getItem("artID"))
    if (storedIds) {
      const newIds = storedIds.filter((artId) => {
        return artId !== id
      })
      setArtData(prev => prev.filter(art => art.id !== id))
      localStorage.setItem("artID", JSON.stringify(newIds))
    }
  }

  if (!ids) {
    return <div>No Favorites Saved</div>
  }
  return (
    <>
      {artData.map((art) => (
        <div key={art.id}>
          <FavoritesArtCard art={art} handleClear={handleClear}/>
        </div>
      ))}
    </>
  )
}

export default FavoritesArtList