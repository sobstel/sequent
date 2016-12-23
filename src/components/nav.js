
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/EvilIcons';

class Nav extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderIcon('main', 'play')}
        {this.renderIcon('history', 'trophy')}
        {this.renderIcon('about', 'question')}
      </View>
    )
  }

  renderIcon(name, iconName) {
    let localStyles = [];

    if (name == this.props.routes.scene.name) {
      localStyles.push(styles.activeIconWrapper);
    }

    return (
      <TouchableHighlight style={[styles.iconWrapper, ...localStyles]} onPress={Actions[name]}>
        <Icon name={iconName} style={styles.icon}/>
      </TouchableHighlight>
    );
  }
}

export default connect(({routes}) => ({routes}))(Nav);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  iconWrapper: {
    backgroundColor: 'saddlebrown',
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 7,
    marginHorizontal: 10,
  },
  activeIconWrapper: {
    backgroundColor: 'black',
  },
  icon: {
    color: 'white',
    fontSize: 30,
  }
});
