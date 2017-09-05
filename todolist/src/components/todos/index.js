import React from 'react';
import Todo from '../todo';

const Todos = ({todos, params_todoItem}) => {
    return (
        <ul>
            {todos.map(v =>{
                return <Todo {...params_todoItem} key={v.id} />;
            })}
        </ul>
    );
}

export default Todo;