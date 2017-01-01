
import { StyleSheet } from 'react-native'

export const bgColor = 'lightskyblue'

export default StyleSheet.create({
  rootScene: {
    backgroundColor: bgColor
  },
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: bgColor
  }
})
