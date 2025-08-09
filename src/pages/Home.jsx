import React from "react"
import NavBar from "../components/NavBar"


function Home() {
  return (
    <div>
      <NavBar />
      <div>
      <h1>Meowseum - Feline Fine Art</h1>
      <img src="https://www.artic.edu/iiif/2/86706756-2cf8-6a7c-58cc-90efaa4db124/full/843,/0/default.jpg"></img>
      <h2>Welcome to Feline Fine Art - where whiskers meet masterpieces. </h2>
      <p> We've scoured the Art Institute of Chicago's collection to bring you a curated gallery of artworks celebrating cats in all their glory. From elegant watercolors and intricate prints to charming sculptures, every piece in our collection captures the beauty, mystery, and playfulness of our feline friends. </p>
      <p> Browse the gallery, filter by medium, and save your favorite pieces to revisit anytime. Whether you're here for the artistry, the subject matter, or both, we hope you enjoy exploring this unique selection. </p>
      </div>
      <div>
        <h3>About the Art Institute of Chicago</h3>
        <p>The Art Institute of Chicago, founded in 1879, is one of the oldest and largest art museums in the United States. Located in Grant Park, it houses a world-renowned collection spanning centuries, cultures, and identities. The museum is dedicated to collecting, preserving, and interpreting art in ways that reflect its context and meaning over time. As a space for gathering and exchange, it fosters inclusive conversations and inspires a deeper understanding of human creativity.</p>
        <a href="https://www.artic.edu/" target="_blank" rel='noopener noreferrer'>Learn more</a>
      </div>
    </div>
  )
}

export default Home