import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import LoginScene from './scenes/LoginScene';
import LaunchScene from './scenes/LaunchScene';

import UserService from './models/UserService';

class MainNav extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'LoginScene':
        return <LoginScene navigator={navigator} />
        break;
      case 'LaunchScene':
        return <LaunchScene navigator={navigator} />
        break;
      default:
        return <LoginScene navigator={navigator} />
    }
  }

  render() {
    validateSession();
    return (
      <Navigator
        initialRoute={{ name: !validateSession() ? 'LoginScene' : 'LaunchScene' }}
        renderScene={ this.renderScene } />
    )
  }
}


function validateSession(){
  return UserService.findAll().length == 1;
}

AppRegistry.registerComponent('ReactApp', () => MainNav);





























/****/
