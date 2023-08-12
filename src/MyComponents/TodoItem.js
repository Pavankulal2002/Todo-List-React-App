import React from 'react'

export default function Todo({todo,Ondelete}) {
  return (
    <div>
     
    <h3> {todo.sno}.  {todo.title}</h3>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{Ondelete(todo)}} >Remove</button>
    </div>
  )
}
