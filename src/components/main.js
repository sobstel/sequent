
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './board';
import ControlButton from './control_button';
import Header from './header';
import Nav from './nav';
import LevelPicker from './level_picker';
import Timer from './timer';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Sequent"/>
        <LevelPicker/>
        <ControlButton/>
        <Board/>
        <Timer/>
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
