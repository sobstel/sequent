
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Board from '../components/board';
import ControlButton from '../components/control_button';
import Header from '../components/header';
import Nav from '../components/nav';
import LevelPicker from '../containers/level_picker';
import Timer from '../components/timer';

import commonStyles from '../styles/common';

export default class Main extends Component {
  render() {
    return (
      <View style={[commonStyles.scene, styles.container]}>
        <StatusBar hidden/>
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
  },
});
