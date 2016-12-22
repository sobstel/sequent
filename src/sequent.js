
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/app'

class Sequent extends Component {
  render() {
    let store = createStore(() => {})

    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('sequent', () => Sequent);
