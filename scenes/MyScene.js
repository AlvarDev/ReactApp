import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

export default class MyScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      championship: ''
    };
  }

  render() {
    let style = require('../styles/MySceneStyle');
    return (
      <View style={style.mySceneCointainer}>
        <Image
          source={require('../img/logo.png')}
          style={style.mySceneImage}/>

        <TextInput
          style={{height: 40, width: 200}}
          placeholder="Type here the championship"
          onChangeText={(championship) => this.setState({championship})}/>

        <Text style={{color: '#9c3424'}}>{this.state.championship}</Text>

        <YearScene year='2017' />
      </View>
    );
  }
}

export class YearScene extends Component {
  render(){
    return(
      <Text style={{color: '#9c3424', fontWeight: 'bold'}}>{this.props.year}</Text>
    );
  }
}
