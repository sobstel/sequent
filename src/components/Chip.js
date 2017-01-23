
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import Dimensions from 'Dimensions'
import * as Animatable from 'react-native-animatable'

import { bgColor } from '../styles/common'

export default class Chip extends Component {
  render () {
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()} disabled={this.isDisabled()}>
        <Animatable.View
          animation='bounceIn'
          delay={Math.random() * 400}
          duration={400}
          ref='chip'
          style={[styles.chip, this.styles()]}
        >
          {this.renderText()}
        </Animatable.View>
      </TouchableWithoutFeedback>
    )
  }

  onPress () {
    const { chip, onPress } = this.props

    this.refs.chip.tada(75)
    onPress(chip.id)
  }

  renderText () {
    const { chip } = this.props

    if (chip.status === 'hidden') {
      return (<Text />)
    }

    return (
      <Text style={styles.text}>{chip.number}</Text>
    )
  }

  isDisabled () {
    const { chip } = this.props
    return (chip.status !== 'highlighted' && chip.status !== 'hidden')
  }

  styles () {
    const { chip } = this.props

    return chip.status ? styles[chip.status] : {}
  }
}

const { width } = Dimensions.get('window')

// 1 (1 8 1) (1 8 1) (1 8 1) (1 8 1) 1
const minChipSize = 44
const maxChipSize = 64
const chipSize = Math.min(Math.max(parseInt(8 / 42 * width), minChipSize), maxChipSize)
const chipMargin = parseInt((width - 4 * chipSize) / 10)

const styles = StyleSheet.create({
  chip: {
    margin: chipMargin,
    backgroundColor: '#333',
    borderRadius: parseInt(chipSize / 2),
    width: chipSize,
    height: chipSize,
    justifyContent: 'center',
    alignItems: 'center'
  },
  idle: {
    backgroundColor: bgColor
  },
  highlighted: {
    backgroundColor: 'rebeccapurple'
  },
  hidden: {
  },
  disabled: {
    backgroundColor: '#444'
  },
  valid: {
    backgroundColor: 'seagreen'
  },
  invalid: {
    backgroundColor: 'indianred'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff'
  }
})
