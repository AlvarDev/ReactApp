import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import LoginScene from './scenes/LoginScene';
import LaunchScene from './scenes/LaunchScene';

import UserService from './models/UserService';

class MainNav extends Component {

  renderScene(route, navigator) {
     return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator } )
   }

  render() {
    validateSession();
    return (
      <Navigator
        initialRoute={{ component: validateSession() ? LaunchScene : LoginScene}}
        renderScene={ this.renderScene } />
    )
  }
}

function validateSession(){
  return UserService.findAll().length == 1;
}

AppRegistry.registerComponent('ReactApp', () => MainNav);





























/****/
