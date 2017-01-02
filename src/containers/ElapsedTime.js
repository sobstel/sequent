
import { connect } from 'react-redux'

import Time from './../components/Time'

const mapStateToProps = (state) => {
  return {
    started: state.game.started,
    startedAt: state.game.startedAt,
    endedAt: state.game.endedAt,
    won: state.game.won
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ElapsedTime = connect(mapStateToProps, mapDispatchToProps)(Time)

export default ElapsedTime
