import store from './store.js';
import {bindActionCreators} from 'redux';
import * as actions from './action';

let {dispatch} = store;

export default bindActionCreators({
    ...actions
}, dispatch);
