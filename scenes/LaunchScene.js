import React, { Component } from 'react';
import { AppRegistry, Navigator, Button, Image } from 'react-native';
import UserModel from '../models/UserModel';
import UserService from '../models/UserService';

export default class LaunchScene extends Component {
  render() {
    var style = require('../styles/styles');
    return (
      <Image source={require('../img/bs.jpg')} style={style.backgroundImage}/>
    );
  }
}



const dota = () => {
  console.log('image clicked');
};

AppRegistry.registerComponent('ReactApp', () => LaunchScene);





























/****/
