
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AvenirNext-Heavy',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 15,
    color: 'darkslategray',
  }
});
