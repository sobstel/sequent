
import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

export default class ControlButton extends Component {
  constructor(props) {
    super(props);
    this.state = { label: 'Start' };

    this.onPress = this.onPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label} onPress={this.onPress}>{this.state.label.toUpperCase()}</Text>
      </View>
    )
  }

  onPress() {
    this.setState({label: 'Stop'});
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'saddlebrown',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  label: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 2,
  },
});
