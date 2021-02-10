import React from 'react'
import gallerypic from "../../assets/images/gal1-1.jpg"
import './style.css'
export default function Hero() {
    return (
        <div>
            <img alt="Gallery" src={gallerypic} id="homepic" />
        </div>
    )
}
