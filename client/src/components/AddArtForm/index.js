import React, { useState, useEffect } from "react";
import "./style.css"
import { Button, Form } from 'react-bootstrap';
import Artistlist from "../Artistlist";
import API from "../../utils/API";


export default function AddArtForm(props) {
    const [selectedOpt, setSelectedOpt] = useState("")
    const [state, setState] = useState({
        type: "",
        title: "",
        width: 0,
        length: 0,
        depth: 0,
        image: "",
        media: "",
        price: "",
        newRelease: false
    })

    function selectOption(event) {
        const value = event.target.value;
        setSelectedOpt(value);
        console.log(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newRelease = document.getElementById("new_Release").checked
        setState({ ...state, newRelease })
        API.saveArt({ ...state }, selectedOpt )
            .then(res => {
                console.log(res)
            })
        console.log(state)
        // uploadFile(state.image) need to pass info to aws
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
        console.log(state)
    };

    return (
        <div className="border border-dark p-2">
            <h1>Add Artwork</h1>
            <Form>
                <Artistlist
                    artists={props.artists}
                    // handleFormSubmit={handleFormSubmit}
                    selectOption={selectOption}
                    selectedOpt={selectedOpt}
                />
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Artwork Type</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="type" value={state.type} as="select">
                        <option>Select One...</option>
                        <option value="painting">Painting</option>
                        <option value="sculpture">Sculpture</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label>Artwork Title:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="title" value={state.title} type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="formWidth">
                    <Form.Label>Width:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="width" value={state.width} type="number" placeholder="Height" />
                </Form.Group>
                <Form.Group controlId="formLength">
                    <Form.Label>Length:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="length" value={state.length} type="number" placeholder="Length" />
                </Form.Group>
                <Form.Group controlId="formDepth">
                    <Form.Label>Depth:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="depth" value={state.depth} type="number" placeholder="Depth" />
                </Form.Group>
                <Form.Group controlId="formPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="price" value={state.price} type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Media Type:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="media" value={state.media} as="select">
                        <option>Select One...</option>
                        <option value="Oil">Oil</option>
                        <option value="Acrylic">Acrylic</option>
                        <option value="Watercolor">Watercolor</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Mixed Media">Mixed Media</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add Image File" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect3">
                    <Form.Check id="new_Release" type="checkbox" label="New Release" />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
