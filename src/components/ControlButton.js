
import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

export default class ControlButton extends Component {
  render () {
    const { label, onPress } = this.props

    return (
      <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.label}>{label.toUpperCase()}</Text>
      </TouchableHighlight>
    )
  }
}

ControlButton.propTypes = {
  label: PropTypes.string.isRequired
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
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 3
  }
})
