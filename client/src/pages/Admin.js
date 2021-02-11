import React, { useState, useEffect } from "react";
import Artistlist from "../components/Artistlist"
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
  console.log(artists)
    return (
        <div>
            <Artistlist />
        </div>
    )
}
export default Admin;