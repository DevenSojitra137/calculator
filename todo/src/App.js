import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [todo, settodo] = useState([])
  const [todo2, settodo2] = useState()

  const hand = () =>{
    settodo( [...todo , todo2])
    settodo2('')
  }

  return (
    <>
      <center>
        <div className="main">
          <div className="second">
            <h1>To Do List </h1>
            <input type="text" value={todo2} onChange={(e)=>{settodo2(e.target.value)}}/>
            <button onClick={hand}>
              add
            </button>
          </div>
          <hr />
          <>
          {
                todo.map((todo,index) =>{
                  return(
                    <div key={index}>{todo}</div>
                )
                })
              }
          </>
        </div>
      </center>
    </>
  );
}

export default App;
