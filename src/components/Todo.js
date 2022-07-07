import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    // events
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            // compares each element id in the todos array
            // with the element id you're clicking on
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }


    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );
}

export default Todo;