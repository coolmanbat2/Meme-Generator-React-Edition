import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import ViewShot from "react-native-view-shot";

export default class MemeImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenShottedImage: "",
    }
  }

  render() {
    return (
      <View>
          <ImageBackground    
          source={this.props.image} 
          style={this.props.style}>
              <Text style={styles.custom}>{this.props.topText}</Text>
              <Text style={styles.custom}>{this.props.bottomText}</Text>
        </ImageBackground>
      </View>
    );
    }
}

const styles = StyleSheet.create({
    custom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        textShadowColor:'black',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        fontFamily: "Impact",
        textAlign: "center",
    }
});
