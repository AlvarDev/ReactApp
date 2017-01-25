import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert } from 'react-native';
import UserModel from './models/UserModel';
import UserService from './models/UserService';

class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    var style = require('./styles/styles');
    testRealm();
    return (
      <Image source={require('./img/bg_james.png')} style={style.backgroundImage}>
        <Image
          source={require('./img/james_white.png')}
          style={{width: 170, height: 100, marginBottom: 56, resizeMode: 'cover'}}/>

        <TextInput
          style={style.inputText}
          placeholder = "Email"
          placeholderTextColor = '#ffffff'
          onChangeText={(email) => this.setState({email})}/>

        <TextInput
          secureTextEntry={true}
          style={style.inputText}
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
    // return fetch('https://raw.githubusercontent.com/AlvarDev/HostJson/master/loginerror.js')
    return fetch('https://raw.githubusercontent.com/AlvarDev/HostJson/master/login.js')
      .then((response) => response.json())
      .then((rj) => {
        UserService.save(rj.user);
        console.log(rj.success ? rj.user : rj.message);
      })
      .catch((error) => {
        console.error(error);
      });
}

function testRealm(){
  console.log(UserService.findAll().length);
}

AppRegistry.registerComponent('ReactApp', () => LoginScene);
