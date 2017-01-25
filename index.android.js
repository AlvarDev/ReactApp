import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert } from 'react-native';
import PlaceModel from './models/PlaceModel';
import PlaceService from './models/PlaceService';

class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    var s = require('./styles/styles');
    testRealm();
    return (
      <Image source={require('./img/bg_james.png')} style={{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        width: null,
        height: null,
        resizeMode: 'stretch',
        alignItems: 'center'}}>

        <Image
          source={require('./img/james_white.png')}
          style={{width: 170, height: 100, marginBottom: 56, resizeMode: 'cover'}}/>

        <TextInput
          style={s.inputText}
          placeholder = "Email"
          placeholderTextColor = '#ffffff'
          onChangeText={(email) => this.setState({email})}/>

        <TextInput
          secureTextEntry={true}
          style={s.inputText}
          placeholder = "Senha"
          placeholderTextColor = '#ffffff'
          onChangeText={(password) => this.setState({password})} />

        <Button
          onPress={()=>validate(this.state.email,this.state.password)}
          title="               Login               "
          color="#592c5e"
          accessibilityLabel="Learn more about this purple button"/>

      </Image>
    );
  }
}

const validate = (email, password) => {
  if(email == '' && password == ''){
    Alert.alert('empty fields');
  }else{
    login(email, password);
  }
};

function login(email, password) {
    return fetch('https://raw.githubusercontent.com/AlvarDev/HostJson/master/places.js')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.places);
      })
      .catch((error) => {
        console.error(error);
      });
}

function testRealm(){
  console.log(PlaceService.findAll().length);
  var place = new PlaceModel();
  place.name = 'dota';
  PlaceService.save(place);
}

AppRegistry.registerComponent('ReactApp', () => LoginScene);
