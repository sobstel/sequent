
import { connect } from 'react-redux'

import Level from './../components/Level'

const mapStateToProps = (state) => {
  return {
    level: state.game.level
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLevel: () => {
      dispatch({ type: 'CHANGE_LEVEL' })
    }
  }
}

const LevelPicker = connect(mapStateToProps, mapDispatchToProps)(Level)

export default LevelPicker
