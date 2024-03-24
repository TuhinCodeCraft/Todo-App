import React, { useState } from 'react'

function AddTodo({onNewItem}) {
    const [todoName, setTodoName] = useState('')
    const [dueDate, setDueDate] = useState('')

    const handleTodoNameChange = (e) => {
        setTodoName(e.target.value)
    }
    const handleTodoDateChange = (e) => {
        setDueDate(e.target.value)
    }
    const handleAddTodo = () => {
        onNewItem(todoName, dueDate)
        setTodoName('')
        setDueDate('')
    }

    return (
        <div className="container text-center">
            <div className="row kg-row">
            <div className="col-6">
                <input 
                type="text"
                value={todoName} 
                placeholder="Enter Todo Here" 
                onChange={handleTodoNameChange}
                />
            </div>
            <div className="col-4">
                <input 
                type="date"
                value={dueDate} 
                onChange={handleTodoDateChange}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button" onClick={handleAddTodo}>Add</button>
            </div>
        </div>
        </div>
    )
}

export default AddTodo
