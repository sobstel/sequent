
import { StyleSheet } from 'react-native'

export const bgColor = 'lightskyblue'

export default StyleSheet.create({
  rootScene: {
    backgroundColor: 'black'
  },
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: bgColor,
    borderRadius: 20
  }
})
