import store from './js/store';
import Container from './js/container';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
		    <Container />
	    </Provider>
    );
  }
}

export default App;
