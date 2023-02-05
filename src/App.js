import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newText, setNewText] = useState("");

   const textChange = (event) => {
    setNewText(event.target.value);
   }

   const addTask = () => {
    // const newTodoList = [...todoList, newText];
    setTodoList([...todoList, newText]);
   }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={textChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* {newText} */}
      <div className='list'>
        {todoList.map((task, key) => {
          return (
            <h1>{task}</h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;
