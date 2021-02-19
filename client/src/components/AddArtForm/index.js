import React, { useState } from "react";
import "./style.css"
import { Button, Form } from 'react-bootstrap';

export default function AddArtForm() {
    return (
        <div className="border border-dark p-2">
            <h1>Add Artwork</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        <option>Painting</option>
                        <option>Sculpture</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label>Artwork Title:</Form.Label>
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="formHeight">
                    <Form.Label>Height:</Form.Label>
                    <Form.Control type="number" placeholder="Height" />
                </Form.Group>
                <Form.Group controlId="formWidth">
                    <Form.Label>Width:</Form.Label>
                    <Form.Control type="number" placeholder="Width" />
                </Form.Group>
                <Form.Group controlId="formDepth">
                    <Form.Label>Depth:</Form.Label>
                    <Form.Control type="number" placeholder="Depth" />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add Image File" />
                </Form.Group>
                <Form.Group controlId="formNewRelease">
                    <Form.Check type="checkbox" label="Add to New Releases?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
