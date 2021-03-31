import React, { useState, useEffect } from "react";
import Artistlist from "../components/Artistlist"
import AddArtist from "../components/AddArtist"
import Displaybox from "../components/Displaybox"
import Imagecard from "../components/Imagecard"
import Container from "../components/Container"
import AddArtForm from "../components/AddArtForm"
import API from '../utils/API'
import "../pages/style.css"
import { Col, Row } from "react-bootstrap";

function Admin() {
    const [artists, setArtists] = useState({});

    useEffect(() => {
        loadArtists();
      }, []);
    
      function loadArtists() {
        API.getArtists().then((res) => setArtists(res.data));
      }

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    if (artists.length > 0) {
        console.log(artists)
        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <AddArtist />
                    </Col>
                    <Col size="md-6">
                        <AddArtForm />
                    </Col>
                </Row>
                <Displaybox>
                    <Imagecard artists={artists} />
                </Displaybox>
            </Container>
        )
    } else {
        return (
            <div>
                <Artistlist artists={[]} />
            </div>
        )
    }
}
export default Admin;

