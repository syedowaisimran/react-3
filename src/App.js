import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App(){
const [todo, setTodo] = useState([]);
  const [text,setText] = useState("");
  const [indexNum,SetindexNum] = useState();

  let add = () =>{
    if(indexNum > -1){
      todo[indexNum] = text;
      setTodo([...todo]);
      SetindexNum(-1);
    }
    else{
      todo.push(text);
      setTodo([...todo]);
    }
    setText("");
}
  let del = (i) =>{
    todo.splice(i,1);
    setTodo([...todo]);
  }
  let edit = (i) =>{
    SetindexNum(i);
    setText(todo[i]);
  }
 return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
         <input className='inp' onChange={(e) =>{
          setText(e.target.value);
         }} type="text" placeholder='Enter Text' />
        <button className='btn' onClick={add}>Add</button>
       {todo.map((x,i) =>{
        return(
          <li key={i}>
          {x}
          <button className='btn' onClick={() => del(i)}>Delete</button>
          <button className='btn' onClick={() => edit(i)}>Edit</button>

          </li>
        )
       })}


  
       
      </header>
    </div>
  )};


export default App;
