import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Favorites from "./pages/Favorites"
import ArtList from "./components/ArtList"
import FavoritesArtList from './components/FavoritesArtList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery />} >
        <Route index element = {<ArtList />} />
      </Route >
      <Route path="/favorites" element={<Favorites />} >
        <Route index element = {<FavoritesArtList />} />
      </Route >
    </Routes>
  
  )
}

export default App
