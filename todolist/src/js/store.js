import rootReducer from './reducer';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
