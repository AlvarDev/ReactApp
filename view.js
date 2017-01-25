import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Image, Button, Alert } from 'react-native';
var s = require('./styles/styles');
let  myView = (
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
