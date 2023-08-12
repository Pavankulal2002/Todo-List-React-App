import React from 'react'

export default function Todo({todos}) {
  return (
    <div>
     
    <h3> {todos.sno}.  {todos.title}</h3>
    <p>{todos.desc}</p>
    <button className="btn btn-sm btn-danger">Remove</button>
    </div>
  )
}
