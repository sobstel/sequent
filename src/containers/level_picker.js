
import { connect } from 'react-redux';

import { changeLevel } from '../actions'
import Level from './../components/level';

const mapStateToProps = (state) => {
  return {
    level: state.level,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPress: () => { dispatch(changeLevel()); },
  }
}

const LevelPicker = connect(mapStateToProps, mapDispatchToProps)(Level);

export default LevelPicker;
