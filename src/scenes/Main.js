
import React, { Component } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import Nav from '../components/Nav'

import BoardContainer from '../containers/BoardContainer'
import GameControl from '../containers/GameControl'
import LevelPicker from '../containers/LevelPicker'
import ElapsedTime from '../containers/ElapsedTime'

import commonStyles from '../styles/common'

export default class Main extends Component {
  render () {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden />
        <Header title='Sequent' />
        <LevelPicker />
        <GameControl />
        <BoardContainer />
        <ElapsedTime />
        <Nav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
