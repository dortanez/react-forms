import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState(['eat', 'play']);
    const makeTodo = () => {
        setTodos(todos => 
            
        )
    }
    return (
        <div>
            <NewTodoForm/>
            <ul>
                {todos.map(todo => 
                    <Todo todo={todo}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList;