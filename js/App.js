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

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Button style={{flex: 2}}>1</Button>
          <Button style={{flex: 1}}>2</Button>
          <Button style={{flex: 9}}>3</Button>
        </View>
        <View style={styles.container}>
          <Button style={{flex: 3}}>4</Button>
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
