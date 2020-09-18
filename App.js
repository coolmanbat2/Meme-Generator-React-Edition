import ImagePicker from 'react-native-image-picker'
import ViewShot, { captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import Input from './components/Input';
import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Button, TouchableWithoutFeedback, Keyboard, Alert, Platform, PermissionsAndroid } from 'react-native';
import MemeImage from './components/Image';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      screenShottedImage: "",
      photo: {
        uri: "http://quicklol.com/wp-content/uploads/2013/02/brace-yourself-meme-template.jpg"
      },
    };
  }

  render() {
    const options = {
      title: 'Select Meme Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Input 
                textLabel={"top meme text"}
                onChangeText={(topText) => this.setState({topText})}
                value={this.state.topText}/>
                <ViewShot ref="viewShot">
                  <MemeImage 
                        style={{
                          width: 250, 
                          height: 250,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        image={this.state.photo}
                        topText={this.state.topText.toUpperCase()}
                        bottomText={this.state.bottomText.toUpperCase()}/>
                </ViewShot>
                        
                <Input 
                textLabel={"bottom meme text"}
                onChangeText={(bottomText) => this.setState({bottomText})} 
                value={this.state.bottomText}
                autofocus={true}
                />

                <Button
                title={"Add Image"}
                color="red"
                onPress={() => {
                  ImagePicker.showImagePicker(options, (response) => {
                    if (response.didCancel) {
                      console.log('User cancelled image picker');
                    } else if (response.error) {
                      console.log('ImagePicker Error: ', response.error);
                    } else {
                      this.setState({photo: response})
                  }})
                }}
                />

                <Button
                title={"Save Image"}
                color="red"
                onPress={() => {
                  // taking a screen capture of the entire screen.
                  this.refs.viewShot.capture().then(uri => {
                        CameraRoll.save(uri, "photo", "")
                      .catch((error) => {
                        Alert.alert(error.message);
                      })
                  })
                }}
                />
              </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
  }
}