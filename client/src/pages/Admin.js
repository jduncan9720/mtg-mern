import React, { useState, useEffect } from "react";
import Artistlist from "../components/Artistlist"
import API from '../utils/API'

function Admin() {
    const [artists, setArtists] = useState({})
    const [selectedOpt, setSelectedOpt] = useState(0)

    useEffect(() => {
        loadArtists()
    }, [])

    function loadArtists() {
        API.getArtists()
            .then(res =>
                setArtists(res.data))
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        alert("working")

    }

    function selectOption(event){
        const value = event.target.value
        // const selected = opt.options[opt.selectedIndex].value
        setSelectedOpt(value)
        console.log(value)
        console.log(selectedOpt)
    }

    if (artists.length > 0) {
        console.log(artists)
        return (
            <Artistlist 
                artists={artists} 
                handleFormSubmit={handleFormSubmit} 
                selectOption={selectOption}/>
        )
    } else {
        return (
            <div>
                <Artistlist artists={[]}/>
            </div>
        )
    }
}
export default Admin;

