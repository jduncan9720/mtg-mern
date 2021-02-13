import React from 'react'
import "./style.css"
export default function Imagecard(props) {
    console.log(props)
    return (
        <div>
        {
            props.artists.map(artist => (
                <div className="card">
                    <img className="card-img-top" src={artist.painting.painting_img} alt="Artwork" />
                    <div className="card-body">
                        <h5 className="card-title">{artist.painting.title}</h5>
                        <p className="card-text">{artist.painting.price}</p>
                        <p className="card-text">{artist.painting.painting_length} x {artist.painting.painting_width}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            ))
        }
        </div>
    )
}
