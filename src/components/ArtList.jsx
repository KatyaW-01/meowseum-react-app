import React from "react"
import {useOutletContext} from "react-router-dom"
import ArtCard from "./ArtCard"

function ArtList() {
  const {catArt} = useOutletContext()
  return (
    <div className="art-div">
      {catArt.map((art) => (
        <div key={art.id}>
          <ArtCard art={art}/>
        </div>
      ))}
    </div>
  )
}

export default ArtList