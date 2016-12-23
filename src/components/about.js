
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Header from './header';
import Nav from './nav';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header title="About"/>

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
