
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Header from './header';
import Nav from './nav';

export default class History extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header title="Best Results"/>
        <Text>TO DO</Text>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'lightskyblue',
  },
});
