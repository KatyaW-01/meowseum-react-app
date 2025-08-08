import { useEffect, useState } from 'react';

function useArt() {
  const [catArt, setCatArt] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true&page=1&limit=100")
    .then((response) => response.json())
    .then((data) => {
      setCatArt(data.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  useEffect(() => {
    catArt.map((art)=> {
      if (art.api_link !== null) {
        fetch(art.api_link)
        .then((response) => response.json())
        .then((data) => {
          const artData = {
            'id': art.id,
            'type': data.data.artwork_type_title,
            'data': data
          }
          setData(prev => {
            const alreadyExists = prev.some(artPiece => artPiece.id === artData.id)
            return alreadyExists ? prev : [...prev, artData]
          })
        })
      }
    })
  },[catArt])

  // console.log("data for filtering:",data)

  // function filterByType() {

  // }

  return {catArt, setCatArt, data}

}

export default useArt