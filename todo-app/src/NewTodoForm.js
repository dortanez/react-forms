import React from 'react';

const NewTodoForm = ({newTodo}) => {
    const makeTodo = (e) => {
        e.preventDefault();
        const todoInput = document.querySelector('input');
        newTodo(todoInput.value);
        todoInput.value = '';
    }
    return (
        <form>
            <h2>TodoList</h2>
            <input></input>
            <button onClick={makeTodo}>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;