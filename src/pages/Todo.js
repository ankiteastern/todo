import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

function Todo() {
    const [todoData, setTodoData] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if (todoData) {
            setTodos([...todos, todoData])
            setTodoData('')
        } else {
            alert('Please type your todo item first!')
        }
    }

    const removeTodo = () => {
        if (todos.length >= 0) {
            todos.pop()
            if (todos.length === 0) {
                setTodos([])
            }
            if (todos.length > 0) {
                setTodos([todos])
            }
        }
    }

    const removeTodoByIndex = (id) => {
        const filteredTodos = todos.filter((elem, indx) => {
            return id !== indx;
        })

        setTodos(filteredTodos)
    }

    const addTodoOnEnter = (event) => {
        if (event.key === 'Enter') {
            addTodo()
          }
    }
return (
    <>
        <div className="child content">
            <div className="todo-items">
            &nbsp;
                <button className="add-todo" onClick={addTodo}>Add ToDo</button>
                <button className="remove-todo" onClick={removeTodo}>{ <AiIcons.AiOutlineMinus />}</button>      
                <h2>ToDo's</h2>
                <hr></hr>
                <div>
                    <input className="add-todo-item" type="text" value={todoData} placeholder="Add ToDo" onChange={(e) => setTodoData(e.target.value)} onKeyDown={addTodoOnEnter} />
                </div>
                <ul className="todo-list">
                {
                    todos.slice(0).reverse().map((item, index) => {
                        return (
                            <li key={index}>{item} <i className="todo-delete-icon" onClick={() => removeTodoByIndex(index)}>{ <ImIcons.ImCross />}</i></li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    </>
)
}

export default Todo