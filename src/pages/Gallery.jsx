import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import useArt from "../hooks/useArt"

function Gallery() {
  const {catArt} = useArt()
  return (
    <div>
    <NavBar />
    <h1>Gallery </h1>
    <form>
      <label for="artType">Filter Art:</label>
      <select name="artType" id="artType" defaultValue="">
        <option value="" disabled >Select type</option>
        <option value="sculpture">Sculpture</option>
        <option value="print">Print</option>
        <option value="textile">Textile</option>
        <option value="ceramics">Ceramics</option>
        <option value="photograph">Photograph</option>
      </select>
    </form>
    <Outlet context = {{catArt}}/>
    </div>
  )
}

export default Gallery