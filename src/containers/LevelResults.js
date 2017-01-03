
import { connect } from 'react-redux'

import Results from './../components/Results'

const mapStateToProps = (state) => {
  return {
    results: state.game.hiscore[state.game.level]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const LevelResults = connect(mapStateToProps, mapDispatchToProps)(Results)

export default LevelResults
