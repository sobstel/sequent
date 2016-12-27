
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Chip from './Chip'

export default class Board extends Component {
  render () {
    const { chips } = this.props

    return (
      <View style={styles.board}>
        {chips.map(chip =>
          <Chip
            key={chip.id}
            number={chip.number} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
