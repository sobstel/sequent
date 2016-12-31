
import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Time extends Component {
  constructor () {
    super()
    this.state = { time: 0 }
  }

  componentWillReceiveProps (props) {
    if (props.started) {
      this.interval = setInterval(() => this.setState({ time: Date.now() - props.startedAt }), 10)
    } else {
      clearInterval(this.interval)

      const time = (props.endedAt ? props.endedAt - props.startedAt : 0)
      this.setState({ time })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.formatTime(this.state.time)}</Text>
      </View>
    )
  }

  formatTime (time) {
    const leftPart = String('00' + parseInt(time / 1000)).slice(-2)
    const rightPart = String('00' + parseInt(time / 10)).slice(-2)

    return leftPart + '.' + rightPart
  }
}

Time.propTypes = {
  started: PropTypes.bool.isRequired,
  startedAt: PropTypes.number,
  endedAt: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontFamily: 'Courier',
    fontSize: 20,
    textAlign: 'center'
  }
})
