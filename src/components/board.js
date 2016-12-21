
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Chip from './chip'

export default class Board extends Component {
  render() {
    return (
      <View style={styles.board}>
        {this.renderChips()}
      </View>
    );
  }

  renderChips() {
    let chips = [];
    for (var i = 1; i <= 16; i += 1) {
        chips.push(<Chip key={i} number={i}/>);
    }
    return chips;
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
});
