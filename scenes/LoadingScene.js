import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoadingScene extends Component {
  render(){
    var style = require('../styles/styles');
    return (
      <View style={style.loadingStyle}>

        <Text style={{color: '#ffffff', fontSize: 18}}>Loading...</Text>

      </View>
    );
  }

}
