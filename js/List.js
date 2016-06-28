/* @flow */
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';

export default class List extends Component {
  state: {
    dataSource: Object
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.generateRows()),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
          <View style={{margin: 10}}>
            <Text>{rowData}</Text>
          </View>
        )}
      />
    );
  }

  generateRows(): Array<string> {
    var data = [];
    for (let i = 0; i < 100; i++) {
      data.push('Row ' + i);
    }
    return data;
  }
}