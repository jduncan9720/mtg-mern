import React, { useState, useEffect } from "react";
import API from '../../utils/API'

export default function Artistlist() {
  const [artists, setArtists] = useState({});
  const [selectedOpt, setSelectedOpt] = useState("");

  useEffect(() => {
    loadArtists();
  }, []);

  function loadArtists() {
    API.getArtists().then((res) => setArtists(res.data));
  }

  function selectOption(event) {
    const value = event.target.value;
    setSelectedOpt(value);
    console.log(value);
  }
  if (artists.length > 0) {
    console.log(artists)
    return (
      <label>
        {console.log("artists", artists)}
      Artist:
        <select value={selectedOpt} onChange={selectOption}>
          <option value="">Choose Artist</option>
          {artists.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {" "}
              {artist.first_name} {artist.last_name}
            </option>
          ))}
        </select>
      </label>
    )
  } else {
    return (
      <div>
        Nothing Here
      </div>
    )
  }
}
