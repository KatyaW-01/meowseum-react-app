import React from "react"
import NavBar from "../components/NavBar"


function Home() {
  return (
    <>
    <NavBar />
    <h1>The Art Institute of Chicago</h1>
    <img src="https://www.artic.edu/iiif/2/86706756-2cf8-6a7c-58cc-90efaa4db124/full/843,/0/default.jpg"></img>
    <p>The Art Institute of Chicago, founded in 1879, is one of the oldest and largest art museums in the United States. Located in Grant Park, it houses a world-renowned collection spanning centuries, cultures, and identities. The museum is dedicated to collecting, preserving, and interpreting art in ways that reflect its context and meaning over time. As a space for gathering and exchange, it fosters inclusive conversations and inspires a deeper understanding of human creativity.</p>
    <a href="https://www.artic.edu/" target="_blank" rel='noopener noreferrer'>Learn more</a>
    </>
  )
}

export default Home