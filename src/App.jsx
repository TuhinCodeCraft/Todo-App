import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import './App.css'
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMsg from "./components/WelcomeMsg"

function App() {
  const [todoItems, setTodoItems] = useState([])

  const addTodo = (todoName, todoDate) => {
    const newTodoItems = [...todoItems, { name: todoName, dueDate: todoDate }]
    setTodoItems(newTodoItems)
  }

  const deleteTodo = (todoName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoName)
    setTodoItems(newTodoItems)
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={addTodo} />
        <TodoItems
          todoItems={todoItems}
          onDelete={deleteTodo}
        />
        {todoItems.length === 0 && <WelcomeMsg todoItems={todoItems} />}
      </center>
    </>
  )
}

export default App
