import React from 'react'

export default function Artistlist(children) {
    return (
      <form>
      <label>
        Artist:
        <select>{children}</select>
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
}


export function Artistselect(children) {
    return  <option>{children}</option>
}

