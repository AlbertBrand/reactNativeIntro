/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  props: {
    style?: Object | Array<Object>,
    onPress?: Function,
    children?: Object,
  };

  render() {
    return (
      <LinearGradient
        colors={['grey', '#6c1d5f', '#6c1d5f', 'black']}
        locations={[0, 0.2, 0.8, 1]}
        style={[styles.box, this.props.style]}>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor="rgba(0.5, 0.5, 0.5, 0.1)"
          onPress={this.props.onPress}>
          <Text style={styles.boxText}>{this.props.children}</Text>
        </TouchableHighlight>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: '#6c1d5f',
    borderRadius: 5,
  },
  highlight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
  },
});
