/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

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
          <View style={[styles.box, {flex: 4}]}>
            <TouchableHighlight
              style={styles.highlight}
              underlayColor="rgba(0.5, 0.5, 0.5, 0.1)"
              onPress={() => this.buttonPress()}>
              <Text style={styles.boxText}>5</Text>
            </TouchableHighlight>
          </View>
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
