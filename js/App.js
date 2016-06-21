/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class Button extends Component {
  props: {
    style?: Object,
    onPress?: () => void,
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

export default class reactNativeIntro extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={[styles.box, {flex: 2}]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <View style={[styles.box, {flex: 1}]}>
            <Text style={styles.boxText}>2</Text>
          </View>
          <View style={[styles.box, {flex: 9}]}>
            <Text style={styles.boxText}>3</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.box, {flex: 3}]}>
            <Text style={styles.boxText}>4</Text>
          </View>
          <Button
            style={{flex: 4}}
            onPress={() => this.buttonPress()}>5</Button>
        </View>
      </View>
    );
  }

  buttonPress() {
  }
}

const SPACING = 10;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#def',
    marginTop: 20,
    paddingVertical: SPACING/2,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACING/2,
  },
  box: {
    height: 50,
    backgroundColor: '#6c1d5f',
    margin: SPACING/2,
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
