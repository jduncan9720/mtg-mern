import React from 'react'
import "./style.css"
export default function Artistcards(props) {
    console.log(props)
    return (
        <div>
        {
            props.artists.map(artist => (
                <div className="card">
                    <img className="card-img-top artimg" src={artist.featured_image} alt="Artwork" />
                    <div className="card-body">
                        <h5 className="card-title">{artist.first_name} {artist.last_name}</h5>
                    </div>
                </div>

            ))
        }
        </div>
    )
}
