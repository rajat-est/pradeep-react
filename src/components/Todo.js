import React,{useState} from 'react'
import CallbackHook from './CallbackHook';

const Todo = () => {
    const [todos, setTodos] = useState([]);
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

  return (
    <div>
        <CallbackHook todos={todos} addTodo={addTodo}/>
    </div>
  )
}

export default Todo;

