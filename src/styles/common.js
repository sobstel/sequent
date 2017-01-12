
import { StyleSheet } from 'react-native'

export const bgColor = 'lightgray'

export default StyleSheet.create({
  rootScene: {
    backgroundColor: 'black'
  },
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: bgColor
  }
})
