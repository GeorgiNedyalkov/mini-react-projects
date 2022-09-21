import React, { useState } from "react"
import data from "./data/data"

function List() {
  const [people, setPeople] = useState(data)

  const clearAll = () => {
    setPeople([])
  }

  return (
    <div className="birthday-list">
      <h4>{people.length} birthdays today</h4>
      {people.map((person) => {
        return (
          <div className="person" key={person.id}>
            <img className="person__image" src={person.image} alt="" />
            <div className="person__info">
              <h4 className="person__name">{person.name}</h4>
              <h4 className="person__age">{person.age} years</h4>
            </div>
          </div>
        )
      })}
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  )
}

export default List
