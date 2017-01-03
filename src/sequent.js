
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import { reducers, storeMiddleware } from './reducers'

import Main from './scenes/Main'
import Hiscore from './scenes/Hiscore'
import About from './scenes/About'

import commonStyles from './styles/common'

const middleware = [ storeMiddleware ]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers)

const RouterWithRedux = connect()(Router)

class Sequent extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root' hideNavBar style={commonStyles.rootScene}>
            <Scene key='main' component={Main} initial duration='0' />
            <Scene key='hiscore' component={Hiscore} duration='0' />
            <Scene key='about' component={About} duration='0' />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('sequent', () => Sequent)
