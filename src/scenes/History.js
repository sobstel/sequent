
import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import Nav from '../components/Nav'

import commonStyles from '../styles/common'

export default class History extends Component {
  render () {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden />
        <Header title='Best Results' />
        <Text style={styles.text}>under construction</Text>
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
