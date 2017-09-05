import React from 'react';
import Todo from '../todo';

const Todos = ({todos, params_todoItem}) => {
    return (
        <div>
            <p>事项：</p>
            <ul>
                {todos.map(v =>{
                    return <Todo {...v} {...params_todoItem} key={v.id} />;
                })}
            </ul>
        </div>
        
    );
}

export default Todos;