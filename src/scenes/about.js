
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Header from '../components/header';
import Nav from '../components/nav';

import commonStyles from './../styles/common';

export default class About extends Component {
  render() {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden/>
        <Header title="About"/>
        <Text>TO DO</Text>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
