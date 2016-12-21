
import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Board from './board'
import ControlButton from './control_button'
import Footer from './footer'
import Header from './header'
import LevelPicker from './level_picker'
import Timer from './timer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header/>
        <ControlButton/>
        <LevelPicker/>
        <Board/>
        <Timer/>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
