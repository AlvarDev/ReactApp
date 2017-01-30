import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert } from 'react-native';
import UserModel from '../models/UserModel';
import UserService from '../models/UserService';
import LoadingScene from '../scenes/LoadingScene';

export default class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  validate(){
    if(this.state.email == '' || this.state.password == ''){
      Alert.alert('empty fields');
    }else{
      this.state.loading = true
      this.forceUpdate();
      this.login();
    }
  }

  login(){
    fetch('https://raw.githubusercontent.com/AlvarDev/HostJson/master/login.js')
      .then((response) => response.json())
      .then((rj) => {
        UserService.save(rj.user);
        console.log(rj.success ? rj.user : rj.message);
        this.goTo('PlacesScene');
      })
      .catch((error) => {
        this.state.loading = false;
        this.forceUpdate();
        console.error(error);
      });
  }

  goTo(scene){
    this.props.navigator.push({
      name: scene
    })
  }

  render() {
    let style = require('../styles/styles');
    return (
      <View style={{flex: 1}}>
        <Image source={require('../img/bs.jpg')} style={style.backgroundImage}>
          <Image
            source={require('../img/logo.png')}
            style={{width: 170, height: 100, marginBottom: 56, resizeMode: 'cover'}}/>

          <TextInput
            style={style.inputText}
            placeholder = "User"
            placeholderTextColor = '#ffffff'
            onChangeText={(email) => this.setState({email})}/>

          <TextInput
            secureTextEntry={true}
            style={style.inputText}
            placeholder = "Password"
            placeholderTextColor = '#ffffff'
            onChangeText={(password) => this.setState({password})} />

          <Button
            onPress={this.validate.bind(this)}
            title="               Login               "
            color="#9c3424"
            accessibilityLabel="The International"/>

        </Image>

        {this.state.loading ? <LoadingScene /> : null}

      </View>
    );
  }
}
