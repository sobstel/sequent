
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

export default class ControlButton extends Component {
  render () {
    const { gameStarted, startGame, stopGame } = this.props

    const onPress = gameStarted ? stopGame : startGame
    const label = gameStarted ? 'Stop' : 'Start'

    return (
      <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.label}>{label.toUpperCase()}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'saddlebrown',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  label: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 2
  }
})
