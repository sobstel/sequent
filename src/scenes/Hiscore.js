
import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import Nav from '../components/Nav'

import LevelPicker from '../containers/LevelPicker'
import LevelResults from '../containers/LevelResults'

import commonStyles from '../styles/common'

export default class Hiscore extends Component {
  render () {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden />
        <Header title='High Score' />
        <LevelPicker />
        <LevelResults />
        <Nav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
