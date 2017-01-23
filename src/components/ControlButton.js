
import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class ControlButton extends Component {
  render () {
    const { label } = this.props

    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <Animatable.View ref='controlButton' style={styles.container}>
          <Text style={styles.label}>{label.toUpperCase()}</Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    )
  }

  onPress () {
    const { onPress } = this.props

    this.refs.controlButton.tada(75)
    onPress()
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
    fontSize: 17,
    fontWeight: '400',
    letterSpacing: 3
  }
})
