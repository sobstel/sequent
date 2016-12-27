
import React, { Component } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import BoardContainer from '../containers/BoardContainer'
import ControlButtonContainer from '../containers/ControlButtonContainer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import LevelPicker from '../containers/LevelPicker'
import Timer from '../components/Timer'

import commonStyles from '../styles/common'

export default class Main extends Component {
  render () {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden />
        <Header title='Sequent' />
        <LevelPicker />
        <ControlButtonContainer />
        <BoardContainer />
        <Timer />
        <Nav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
