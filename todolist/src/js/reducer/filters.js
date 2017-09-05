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
        case actionTypes.ADD_TODO:
            return {...state};
        default:
            return state;
    }
}
export default filters;