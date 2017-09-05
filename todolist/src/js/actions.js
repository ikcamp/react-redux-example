import actionTypes from  './actionTypes';

export const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    payload: text
});