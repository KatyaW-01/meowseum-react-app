import { useEffect, useState } from 'react';

function useArt() {
  const [catArt, setCatArt] = useState([])

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true")
    .then((response) => response.json())
    .then((data) => {
      setCatArt(data.data)
    })
  },[])

  return {catArt, setCatArt}

}

export default useArt