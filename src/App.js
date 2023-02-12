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

   const deleteTask = (taskName) => {
    
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
            
            <div>
              {task}
              <button onClick={() => deleteTask(task)}>Delete</button>  
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;




