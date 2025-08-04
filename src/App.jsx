import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Favorites from './pages/Favorites'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  
  )
}

export default App
