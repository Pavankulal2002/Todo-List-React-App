import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  var todos=[
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
]

  return (
    <>
    <Header title="TODO LIST" searchBar={true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}


export default App;
