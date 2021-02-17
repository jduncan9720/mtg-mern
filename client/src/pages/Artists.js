import React, { useState, useEffect } from "react";
import Displaybox from "../components/Displaybox"
import Artistcards from "../components/Artistcards"
import API from '../utils/API'

function Artists() {
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
            <>
            <h1>Gallery Artists</h1>
            <Displaybox>
                <Artistcards artists={artists} />
            </Displaybox>
            </>  
        )
    } else {
        return (
            <>
            <Displaybox>
                <Artistcards artists={[]} />
            </Displaybox>
            </> 
        )
    }
}
export default Artists;