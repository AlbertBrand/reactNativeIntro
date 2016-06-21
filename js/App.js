/* @flow */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class reactNativeIntro extends Component {
  render() {
    return (
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
        <View style={[styles.box, {flex: 1}]}>
          <Text style={styles.boxText}>4</Text>
        </View>
        <View style={[styles.box, {flex: 1}]}>
          <Text style={styles.boxText}>5</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#def',
  },
  box: {
    height: 50,
    backgroundColor: '#6c1d5f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  boxText: {
    color: 'white',
  },
});
