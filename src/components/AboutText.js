
import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class AboutText extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Short-term memory training game. Remember the sequential order of numbers displaying on your screen.
        </Text>
        <Text style={styles.text}>
          Inspired by Ayumu. His performance was superior to that of comparably trained university
          students. Young chimpanzees have better working memory than you!
        </Text>
        <Image style={styles.image} source={require('../images/ayumu.gif')} />
      </View>
    )
  }
}

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25
  },
  text: {
    marginVertical: 10,
    textAlign: 'justify'
  },
  image: {
    marginTop: 20,
    width: (width - 50)
  }
})
