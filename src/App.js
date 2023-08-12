import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import { useState } from 'react';

function App() {

const Ondelete= (todo)=>{
  console.log("Deleting",todo)

  settodos(todos.filter((e)=>{return e!==todo ;}))

}

const [todos,settodos]=useState([
  
    { sno:1,
      title:"Study",
      desc:"Go and study react"
  }
  ,
  { sno:2,
    title:"Study",
    desc:"Go and study react"
}
,
{ sno:3,
  title:"Study",
  desc:"Go and study react"
}

])

  return (
    <>
    <Header title="TODO LIST" searchBar={true}/>
    <Todos todos={todos} Ondelete={Ondelete}/>
    <Footer/>
    </>
  );
}


export default App;
