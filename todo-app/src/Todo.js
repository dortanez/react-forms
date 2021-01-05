import React from 'react';

const Todo = ({todo, removeTodo}) => {
    return (
        <li>{todo + ' '} 
            <button onClick={()=>removeTodo(todo)}>X</button>
        </li>
    )
}

export default Todo;