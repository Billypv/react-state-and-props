import { useState } from 'react'
import Todo from "./Todo.js"

function TodoList() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  function handleChange(eventArguament){
    setValue(eventArguament.target.value)
  }
  function handleClick(){
    setTodos([...todos,{name:value, done:false}])
  }
  return (
    <section>
      <div>{todos.map((todo, index) =>
      <Todo todo={todo} key={`todo-${index}`}/>

       )}
      </div>
      <input onChange ={handleChange} placeholder="Add todo" />
      <button onClick={handleClick}>Add</button>
    </section>
  )
}

export default TodoList