import * as actionTypes from '../actionTypes';

let initState = [{
    text: 'example todo',
    compeleted: false,
    id: 0
}];
const todos = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,{
                    text: action.payload.text,
                    compeleted: false,
                    id: Date.now()
                }
            ];
        default:
            return state;
    }
}
export default todos;