
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Board from '../components/Board';
import ControlButton from '../components/ControlButton';
import Header from '../components/Header';
import Nav from '../components/Nav';
import LevelPicker from '../containers/LevelPicker';
import Timer from '../components/Timer';

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
