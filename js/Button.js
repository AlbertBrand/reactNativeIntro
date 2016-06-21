/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Button extends Component {
  props: {
    style?: Object | Array<Object>,
    onPress?: Function,
    children?: Object,
  };

  render() {
    return (
      <View style={[styles.box, this.props.style]}>
        <TouchableHighlight
          style={styles.highlight}
          underlayColor="rgba(0.5, 0.5, 0.5, 0.1)"
          onPress={this.props.onPress}>
          <Text style={styles.boxText}>{this.props.children}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: '#6c1d5f',
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
