import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import useArt from "../hooks/useArt"
import { useState } from 'react';

function Gallery() {
  const {catArtDetails} = useArt()
  const [filteredData, setFilteredData] = useState([])

  function handleChange(event) {
    const value = event.target.value
    if (value === 'all') {
      setFilteredData([])
    } else {
      const filteredArt = catArtDetails.filter((art) => {
        return art.type.toLowerCase().includes(value)
      })
      setFilteredData(filteredArt)
    }
  }

  return (
    <div>
    <NavBar />
    <h1>Gallery </h1>
    <form>
      <label htmlFor="artType">Filter Art:</label>
      <select name="artType" id="artType" defaultValue="" onChange={handleChange}>
        <option value="" disabled >Select type</option>
        <option value="all">All</option>
        <option value="painting">Painting</option>
        <option value="print">Print</option>
        <option value="watercolor">Watercolor</option>
        <option value="photograph">Photograph</option>
        <option value="sculpture">Sculpture</option>
        <option value="ceramics">Ceramics</option>
        <option value="textile">Textile</option>
      </select>
    </form>
    <Outlet context = {{catArtDetails, filteredData}}/>
    </div>
  )
}

export default Gallery