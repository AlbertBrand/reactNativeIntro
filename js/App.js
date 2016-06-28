/* @flow */
import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import Button from './Button';

type Quote = {
  quote: string,
  author: string,
};
type Result = {
  contents: {
    quotes: Array<Quote>
  }
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Button style={[styles.button, {flex: 2}]}>1</Button>
          <Button style={[styles.button, {flex: 1}]}>2</Button>
          <Button style={[styles.button, {flex: 9}]}>3</Button>
        </View>
        <View style={styles.container}>
          <Button style={[styles.button, {flex: 3}]}>4</Button>
          <Button
            style={[styles.button, {flex: 4}]}
            onPress={() => this.buttonPress()}>Show me a quote!</Button>
        </View>
      </View>
    );
  }

  async buttonPress() {
    const result = await fetch('http://quotes.rest/qod.json');
    const json:Result = await result.json();
    const item = json.contents.quotes[0];
    Alert.alert(
      'Quote of the day',
      `${item.quote}  -${item.author}`
    );
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
  button: {
    margin: SPACING/2,
  },
});
