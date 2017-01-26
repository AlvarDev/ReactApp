import React, { Component } from 'react';
import { AppRegistry, Navigator, Button, Image } from 'react-native';
import UserModel from '../models/UserModel';
import UserService from '../models/UserService';

var myNav;
export default class LaunchScene extends Component {

  constructor(props) {
    super(props);
    myNav = this.props.navigator;
  }

  render() {
    var style = require('../styles/styles');
    return (
      <Image source={require('../img/bs.jpg')} style={style.backgroundImage}>
      <Button
        onPress={()=>back()}
        title="               Back               "
        color="#9c3424"
        accessibilityLabel="The International"/>
      </Image>
    );
  }
}

const back = () => {
  myNav.pop();
};


AppRegistry.registerComponent('ReactApp', () => LaunchScene);





























/****/
