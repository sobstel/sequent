
import React, { Component } from 'react'
import Dimensions from 'Dimensions'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class AboutText extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Ayumu participated in a series of short-term memory tasks, such as to remember
          the sequential order of numbers displaying on a touch-sensitive computer screen.
        </Text>
        <Text style={styles.text}>
          His performance in the tasks was superior to that of comparably trained university
          students.
        </Text>
        <Text style={styles.text}>
          Young chimpanzees have better working memory than you.
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
