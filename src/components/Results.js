
import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Dimensions from 'Dimensions'
import moment from 'moment'

import { formatTime } from '../lib/format'

export default class Results extends Component {
  render () {
    const { results } = this.props

    return (
      <ScrollView contentContainerStyle={styles.container} style={styles.view}>
        {results.map((item, i) =>
          <View key={i} style={styles.row}>
            <Text style={[styles.col, styles.col_no]}>#{(i + 1)}</Text>
            <Text style={[styles.col, styles.col_result]}>{formatTime(item.result)}</Text>
            <Text style={[styles.col, styles.col_date]}>{this.formatDate(item.date)}</Text>
          </View>
        )}
      </ScrollView>
    )
  }

  formatDate (date) {
    return moment(date).fromNow()
  }
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 25,
    marginHorizontal: 25
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  col: {
    marginHorizontal: 10,
    marginBottom: 5,
    width: (parseInt((width - 40 - 3 * 20 - 2 * 25) / 2))
  },
  col_no: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    width: 40
  },
  col_result: {
    fontFamily: 'Courier',
    fontSize: 20,
    textAlign: 'center'
  },
  col_date: {
    fontSize: 13,
    textAlign: 'left'
  }
})
