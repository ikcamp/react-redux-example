import * as actionTypes from '../actionTypes';

let initState = {
    isLoading: true
};
const baseInfo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}
export default baseInfo;