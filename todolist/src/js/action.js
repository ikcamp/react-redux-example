import * as actionTypes from  './actionTypes';
import * as model from './model';

export const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    payload: text
});

export const compeleteTodo = id => ({
    type: actionTypes.COMPELETE_TODO,
    payload: id
});

export const chooseFilter = index => ({
    type: actionTypes.CHOOSE_FILTER,
    payload: index
});

export const getTodos = () => dispatch => {
    dispatch({
        type: actionTypes.FETCHING
    });
    model.getTodos()
        .then(res => {
            dispatch({
                type: actionTypes.SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err.toString());
        });
}