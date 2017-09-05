import * as actionTypes from '../actionTypes';

let initState = [{
    text: 'ALL',
    selected: true
}, {
    text: 'COMPELETED',
    selected: false
}, {
    text: 'TODO',
    selected: false
}];
const filters = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHOOSE_FILTER:
            const newState = [...state];
            newState.forEach((v, i) => {
                newState[i].selected = false;
                if (i === action.payload) {
                    newState[i].selected = true;
                }
            });
            return newState;
        default:
            return state;
    }
}
export default filters;