import * as actionTypes from  './actionTypes';

export const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    payload: text
});

export const compeleteTodo = id => ({
    type: actionTypes.COMPELETE_TODO,
    payload: id
})