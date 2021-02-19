import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function index() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link
                        to="/admin"
                        className={
                            window.location.pathname === "/admin"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        ADMIN
                    </Link>
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
                    <Link to="/events"
                        className={
                            window.location.pathname === "/events"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        EVENTS
                    </Link>
                    <Link to="/contact"
                        className={
                            window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        CONTACT
                    </Link>
                    <Link to="/home"
                        className={
                            window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        HOME
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
