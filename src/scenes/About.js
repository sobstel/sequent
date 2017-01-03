
import React, { Component } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import AboutText from '../components/AboutText'
import Header from '../components/Header'
import Nav from '../components/Nav'

import commonStyles from './../styles/common'

export default class About extends Component {
  render () {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden />
        <Header title='About' />
        <AboutText />
        <Nav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    textAlign: 'center'
  }
})
