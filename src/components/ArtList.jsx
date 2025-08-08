import React from "react"
import {useOutletContext} from "react-router-dom"
import { useEffect, useState } from "react";
import ArtCard from "./ArtCard"

function ArtList() {
  const {catArtDetails, loading} = useOutletContext()
  const [artId, setArtId] = useState(() => {
    const saved = localStorage.getItem("artID")
    return saved ? JSON.parse(saved) : []
  })

  function handleSave(id) {
    if (!artId.includes(id)){
      setArtId(prevIds => [...prevIds, id])
    }
  }
  
  useEffect(() => {
    localStorage.setItem("artID", JSON.stringify(artId));
  }, [artId]);

  return (
    <div className="art-div">
      { loading ? (
        <p>Artwork loading...</p>) : 
      (catArtDetails.map((art) => (
        <div key={art.id}>
          <ArtCard art={art} artId={artId} handleSave={handleSave}/>
        </div>
      )))}
    </div>
  )
}

export default ArtList