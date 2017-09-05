import {combineReducers} from 'redux';
import filters from './filters';
import todos from './todos';
import baseInfo from './baseInfo';


const rootReducer = combineReducers({
    filters,
    todos,
    baseInfo
});
export default rootReducer;
