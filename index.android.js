import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import LoginScene from './scenes/LoginScene';
import LaunchScene from './scenes/LaunchScene';
import PlacesScene from './scenes/PlacesScene';
import DetailScene from './scenes/DetailScene';

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
      case 'PlacesScene':
        return <PlacesScene navigator={navigator} />
        break;
      case 'DetailScene':
        return <DetailScene navigator={navigator} {...route.passProps}  />
        break;
      default:
        return <LoginScene navigator={navigator} />
    }
  }

  render() {
    validateSession();
    return (
      <Navigator
        initialRoute={{ name: validateSession() ? 'PlacesScene' : 'LoginScene'}}
        renderScene={ this.renderScene } />
    )
  }
}


function validateSession(){
  return UserService.find()[0] != null;
}

AppRegistry.registerComponent('ReactApp', () => MainNav);





























/****/
