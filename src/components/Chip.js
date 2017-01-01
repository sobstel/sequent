
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import { bgColor } from '../styles/common'

export default class Chip extends Component {
  render () {
    const { chip, onPress } = this.props

    return (
      <TouchableHighlight style={[styles.chip, this.styles()]} onPress={() => onPress(chip.id)} disabled={this.isDisabled()}>
        {this.renderText()}
      </TouchableHighlight>
    )
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

const styles = StyleSheet.create({
  chip: {
    margin: 10,
    padding: 5,
    backgroundColor: '#333',
    borderRadius: 30,
    width: 60,
    height: 60,
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
  correct: {
    backgroundColor: 'green'
  },
  incorrect: {
    backgroundColor: 'red'
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff'
  }
})
