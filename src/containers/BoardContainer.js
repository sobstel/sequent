
import { connect } from 'react-redux'

import Board from './../components/Board'

const mapStateToProps = (state) => {
  return {
    chips: state.game.chips
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChipPress: (id) => {
      dispatch({ type: 'PICK_CHIP', id: id })
    }
  }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
