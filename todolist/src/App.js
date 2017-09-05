import store from './js/store';
import Container from './js/container';
import React, {Component} from 'react';
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
