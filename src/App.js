import React, { useState, useEffect } from "react"
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

    function App() {
    // state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // use effect
    useEffect(() => {
        getLocalTodos();
    }, []); // an empty array means the function runs only when it is first rendered

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]); // place any state that will change in the array

    // functions
    const filterHandler = () => {
        switch(status) {
            case "completed":
              setFilteredTodos(todos.filter((todo) => todo.completed === true))
              break;
            case "uncompleted":
              setFilteredTodos(todos.filter((todo) => todo.completed === false))
              break;
            default:
              setFilteredTodos(todos)
              break;
        }
    }

    // save to local storage
    const saveLocalTodos = () => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }

    return (
    <div className="App">
        <header>
            <h1>Todo List</h1>
        </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
        />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
    );
}

export default App;
