
import { connect } from 'react-redux'

import ControlButton from './../components/ControlButton'

const mapStateToProps = (state) => {
  return {
    label: (state.game.started ? 'Stop' : 'Start')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: () => {
      dispatch({ type: 'TOGGLE_GAME', now: Date.now() })
    }
  }
}

const GameControl = connect(mapStateToProps, mapDispatchToProps)(ControlButton)

export default GameControl
