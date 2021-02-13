import React from 'react'

export default function Artistlist(props) {
  console.log(props)
  return (
    <form>
      <label>
        Artist:
        <select onChange={props.selectOption}>{props.artists.map(artist => (
        <option 
          key={artist._id}
          name={artist.first_name}
          value={artist._id}
          > {artist.first_name} {artist.last_name}
          </option>
      ))}</select>
      </label>
      <input onClick={props.handleFormSubmit} type="submit" value="Submit" />
    </form>

  )
}



