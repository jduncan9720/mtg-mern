import React, { useState } from "react";
import "./style.css"
import { Button, Form } from 'react-bootstrap';
import API from "../../utils/API"

function AddArtist() {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        artist_painter: false,
        artist_sculptor: false,
        artist_other: false,
        featured_image: ""
    })

    const handleSubmit = (event) => {
        console.log("hello")
        event.preventDefault()
        const artist_painter = document.getElementById("painter").checked
        const artist_sculptor = document.getElementById("sculptor").checked
        const artist_other = document.getElementById("other").checked
        setState({...state, artist_painter, artist_sculptor, artist_other})
        API.saveArtists({...state, artist_painter, artist_sculptor, artist_other})
        .then(res => {
            console.log(res)
        })
    };

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value })
        console.log(state)
    };

    return (
        <div className="border border-dark p-2">
            <h1>Add an Artist</h1>
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="first_name" value={state.first_name} type="text" placeholder="First Name..." />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="last_name" value={state.last_name} type="text" placeholder="Last Name..." />
                </Form.Group>
                <Form.Group controlId="formArtistType">
                    <Form.Check id="painter" type="checkbox" label="Painter" />
                    <Form.Check id="sculptor" type="checkbox" label="Sculptor" />
                    <Form.Check id="other" type="checkbox" label="Other" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add Featured Image" />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddArtist;