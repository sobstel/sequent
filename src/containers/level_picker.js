
import { connect } from 'react-redux';

import Level from './../components/level';

const mapStateToProps = (state) => {
  return {
    level: state.level,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const LevelPicker = connect(mapStateToProps, mapDispatchToProps)(Level);

export default LevelPicker;
