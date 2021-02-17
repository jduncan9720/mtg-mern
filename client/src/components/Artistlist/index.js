import React from 'react'

export default function Artistlist(props) {
  console.log(props)
  return (
    <form>
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
      <input onClick={props.handleFormSubmit} type="submit" value="Submit" />
    </form>

  )
}



