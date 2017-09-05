import {combineReducers} from 'redux';
import filters from './filters';
import todos from './todos';

const rootReducer = combineReducers({
    filters,
    todos
});
export default rootReducer;
