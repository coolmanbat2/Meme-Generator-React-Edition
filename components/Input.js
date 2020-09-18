import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ""
    };
  }

  render() {
    return (
      <View>
          <TextInput
          style={{height: "auto", width: "auto", padding: 24}}
          placeholder={this.props.textLabel}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
