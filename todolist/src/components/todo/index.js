import React from 'react';

const Todo = ({text, id, compeleted, compeleteTodo}) => {
    return (
        <li>
            {text}
            {compeleted ? <span>✓</span> : null}
            <a href="#" onClick={() => compeleteTodo(id)}>标记完成</a>
        </li>
    );
}

export default Todo;