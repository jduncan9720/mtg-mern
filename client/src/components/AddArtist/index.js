import React, { useState } from "react";
import "./style.css"
import { Button, Form } from 'react-bootstrap';

function AddArtist() {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        artist_painter: false,
        artist_sculptor: false,
        artist_other: false,
        featured_image: ""
    })
    return (
        <div className="border border-dark p-2">
            <h1>Add an Artist</h1>
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First Name..." />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last Name..." />
                </Form.Group>
                <Form.Group controlId="formArtistType">
                    <Form.Check type="checkbox" label="Painter" />
                    <Form.Check type="checkbox" label="Sculptor" />
                    <Form.Check type="checkbox" label="Other" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add Featured Image" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddArtist;