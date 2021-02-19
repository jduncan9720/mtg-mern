import React, { useState, useEffect } from "react";
import Displaybox from "../components/Displaybox"
import Artistcards from "../components/Artistcards"
import Container from "../components/Container"
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
            <Container style={{textAlign: "center"}}>
            <h1>Gallery Artists</h1>
            <Displaybox>
                <Artistcards artists={artists} />
            </Displaybox>
            </Container>  
        )
    } else {
        return (
            <Container style={{textAlign: "center"}}>
            <Displaybox>
                <Artistcards artists={[]} />
            </Displaybox>
            </Container> 
        )
    }
}
export default Artists;