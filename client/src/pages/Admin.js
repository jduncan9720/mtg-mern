import React, { useState, useEffect } from "react";
import Artistlist from "../components/Artistlist"
import Artistselect from "../components/Artistlist"
import API from '../utils/API'

function Admin() {
const [artists, setArtists] = useState({})

  useEffect(() => {
    loadArtists()
  }, [])

  function loadArtists() {
    API.getArtists()
    .then(res =>
      setArtists(res.data))
  }
 
  if (artists.length > 0) {
      console.log(artists)
    return (
        <Artistlist>  
        {artists.map(artist => (
            <Artistselect key={artist._id}>
                {artist.first_name}
            </Artistselect>
        ))} 
        </Artistlist>
    )
} else {
    return (
        <div>
            <Artistlist />
        </div>
    )
}
}
export default Admin;

