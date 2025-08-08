import { useEffect, useState } from 'react';

function useArt() {
  const [catArt, setCatArt] = useState([])
  const [catArtDetails, setCatArtDetails] = useState([])

  //fetch inital array of data, storing in state
  useEffect(() => {
    async function fetchCatArt() {
      try {
        const response = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true&page=1&limit=100")
        const data = await response.json()
        setCatArt(data.data)
      } catch (error) {
        console.error("Failed to fetch cat art", error)
      }
    }
    fetchCatArt()
  },[])

  //make the second api call for each art piece to get the extra necessary data
  useEffect(() => {
    catArt.forEach((art) => {
      if (art.api_link !== null) {
        async function fetchCatArtDetails() {
          try {
            const response = await fetch(art.api_link)
            const data = await response.json()
            const iiifUrl = data.config.iiif_url
            const imageID = data.data.image_id
            console.log("art id:",data.data.id)
            const artDetails = {
              'id': data.data.id,
              'title': data.data.title,
              'artist': data.data.artist_display,
              'image': `${iiifUrl}/${imageID}/full/843,/0/default.jpg`,
              'type': data.data.artwork_type_title
            }

            setCatArtDetails(prev => {
              const alreadyExists = prev.some(artPiece => artPiece.id === artDetails.id)
              return alreadyExists ? prev : [...prev,artDetails]
            })

          } catch (error) {
            console.error("Failed to fetch art details", error)
          }
        }
        fetchCatArtDetails()
      }
    })
  },[catArt])

  return {catArtDetails}

}

export default useArt