
import './App.css';
import { useState,useEffect,memo} from "react";
import  Todo from './Todo.js';
import  Popup from './Popup.js';



function App() {

  const [todos,setTodos]=useState([])
  const [isPopup,setPopup]=useState(false)

  async function fetchData() {
    try {
      const response = await fetch('https://hor23frby6.execute-api.us-east-1.amazonaws.com/prod/todos', {
        headers: {
          'x-api-key': '5ITWHnqMJ73JcaJFhELR17wSWjHEWLhB1DnVuEw7',
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }//

  useEffect (()=> {
     fetchData();
  },[])

 const columns = [
  {name: 'Task Name', width: '60%'},
  {name: 'Created At', width: '30%'},
  {name: 'Priority', width: '30%'},
 ]

 const  changeStatus= async (id) =>{
  const response = await fetch('https://api.example.com/todos/TODO_ID/status', {
            method: 'PUT',
            headers: {
              'x-api-key': 'YOUR_API_KEY',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status: 'complete',
            }),
          })
          const data = await response.json();
          fetchData();
    }/////

    const handleClick = ()=>{
      setPopup(true);
    }

  return (
    <div className='Container' >
    <div className='ToDoHeader'>
      <div className='Logo'>
        TODO LIST
      </div>
      <button className='addTask' onClick={handleClick}>Add Task +</button>
    </div>
    <div className= 'TableHeader'>
     {
      columns.map(item=>{
        return(
          <div style={{ width: item.width }}>{item.name}</div>
        )
      })
     }
     </div>
     {
      todos.map(item=>{
        return(
          <Todo item={item} changeStatus={changeStatus}/>
        )
      })
     }
     {isPopup && <Popup isPopup={isPopup}/>}
    </div>
  );
}

export default memo(App);
