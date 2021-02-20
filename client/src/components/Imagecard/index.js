import React from 'react'
import "./style.css"
export default function Imagecard(props) {
    console.log(props)
    return (
        <div>
        {
            props.artists.map(artist => (
                <div className="card">
                    <img className="card-img-top" src={artist.artwork[0].image} alt="Artwork" />
                    <div className="card-body">
                        <h5 className="card-title">{artist.artwork[0].title}</h5>
                        <p className="card-text">{artist.artwork[0].price}</p>
                        <p className="card-text">{artist.artwork[0].width} x {artist.artwork[0].length}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            ))
        }
        </div>
    )
}
