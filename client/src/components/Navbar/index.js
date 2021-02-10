import React from 'react'
import { Link } from "react-router-dom";
import './nav.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item">
                            <a className="nav-link" href='tel4356158748'>(435) 615-8748</a>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/artists"
                                className={
                                    window.location.pathname === "/artists"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                ARTISTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={
                                    window.location.pathname === "/about"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/events"
                                className={
                                    window.location.pathname === "/events"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                EVENTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={
                                    window.location.pathname === "/contact"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                CONTACT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/home"
                                className={
                                    window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                HOME
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
