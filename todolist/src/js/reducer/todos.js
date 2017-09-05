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
                    text: action.payload,
                    compeleted: false,
                    id: Date.now()
                }
            ];
        case actionTypes.COMPELETE_TODO:
            const newState = state.map(v => {
                if (v.id === action.payload) {
                    v.compeleted = true;
                }
                return v;
            });
            return newState;
        default:
            return state;
    }
}
export default todos;