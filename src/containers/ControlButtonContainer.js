
import { connect } from 'react-redux'

import ControlButton from './../components/ControlButton'

const mapStateToProps = (state) => {
  return {
    gameStarted: state.game.started
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => {
      dispatch({ type: 'START_GAME' })
    },
    stopGame: () => {
      dispatch({ type: 'STOP_GAME' })
    }
  }
}

const ControlButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ControlButton)

export default ControlButtonContainer
