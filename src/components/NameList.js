import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clerk','Diana']
    const persons= [{
        id:1,
        name: 'Bruce',
        age: 30,
        skill:  'React'
    },
    {
        id:2,
        name: 'Clark',
        age: 35,
        skill:  'Angular'
    },
    {
        id:3,
        name: 'Diana',
        age: 28,
        skill:  'PHP'
    }
]
    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ))

    const nameList = names.map((name, index) => (
       <h2 ket={index}>{index} {name}</h2>
    ))
  return (
    <div>
        {
            nameList
        }
    </div>
  )
}

export default NameList