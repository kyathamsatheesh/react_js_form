import React from 'react'

function Person({person}) {
  return (
    <h2>{person.name}, {person.age} and {person.skill}</h2>
  )
}

export default Person