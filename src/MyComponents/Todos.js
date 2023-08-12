import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos({todos}) {
  return (
    <>
    <h3 className='text-center'>Todos List</h3>
    { todos.map((todo)=>{
     return <TodoItem todos={todo}/>})}
  
   </>
  )
}
