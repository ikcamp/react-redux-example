import * as actionTypes from '../actionTypes';

let initState = [];
const todos = (state = initState, action) => {
    let newState;
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
            newState = state.map(v => {
                if (v.id === action.payload) {
                    v.compeleted = true;
                }
                return v;
            });
            return newState;

        case actionTypes.SUCCESS:
            return [...action.payload];
        
        case actionTypes.CHOOSE_FILTER:
            if (action.payload === 1) {
                newState = state.filter(v => v.compeleted);
            } else if (action.payload === 2) {
                newState = state.filter(v => !v.compeleted);
            }
            return newState;
        default:
            return state;
    }
}
export default todos;