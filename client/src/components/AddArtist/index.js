import React, { useState } from "react";

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
        <div className="border border-dark">
            <h1>Add an Artist</h1>
            <form>
                <div class="form-group">
                    <label>First Name:</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                </div>
                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="painter" />
                    <label className="form-check-label">Painter</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="sculptor" />
                    <label className="form-check-label">Sculptor</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="other" />
                    <label className="form-check-label">Other</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddArtist;