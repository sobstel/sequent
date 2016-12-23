
import React, { Component } from 'react';
import { AppRegistry, StatusBar, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import About from './components/about'
import History from './components/history'
import Main from './components/main'

const RouterWithRedux = connect()(Router);
import reducers from './reducers';

const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

class Sequent extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar={true} style={styles.container}>
            <Scene key="main" component={Main} initial={true} duration="0"/>
            <Scene key="history" component={History} duration="0"/>
            <Scene key="about" component={About} duration="0"/>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightskyblue',
  },
});

AppRegistry.registerComponent('sequent', () => Sequent);
