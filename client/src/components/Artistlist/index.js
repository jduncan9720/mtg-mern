import React from 'react'

export default function Artistlist(props) {
  console.log(props.artists)
  return (
    <label>
      Artist:
      <select value={props.selectedOpt} onChange={props.selectOption}>
        <option value="">Choose Artist</option>
        {props.artists.map(artist => (
          <option
            key={artist._id}
            value={artist._id}
          > {artist.first_name} {artist.last_name}
          </option>
        ))}</select>
    </label>
  )
}