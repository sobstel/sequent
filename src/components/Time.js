
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
        <Text style={[styles.text, this.styles()]}>{this.formatTime(this.state.time)}</Text>
      </View>
    )
  }

  formatTime (time) {
    let leftPart = parseInt(time / 1000)
    if (leftPart < 10) {
      leftPart = String('0' + leftPart).slice(-2)
    }

    const rightPart = String('0' + parseInt(time / 10)).slice(-2)

    return leftPart + '.' + rightPart
  }

  styles () {
    const { won } = this.props

    if (won === true) {
      return styles.won
    }

    if (won === false) {
      return styles.lost
    }

    return {}
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
  },
  won: {
    color: 'seagreen'
  },
  lost: {
    color: 'indianred'
  }
})
