import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const newTodo = (item) => {
        setTodos(todos => 
            [...todos, item]
        )
    }
    const removeTodo = (item) => {
        setTodos(todos =>
            todos.filter(todo => todo !== item)
        )
    }
    return (
        <div>
            <NewTodoForm newTodo={newTodo}/>
            <ul>
                {todos.map(todo => 
                    <Todo 
                        todo={todo} 
                        removeTodo={removeTodo}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList;