import React, { Component } from 'react';
import { ListView, Text, View, Image, Button} from 'react-native';
import MapView from 'react-native-maps';

var myNav;
export default  class DetailScene extends Component {

  constructor(props) {
    super(props);
    myNav = this.props.navigator;
  }

  render() {
    var style = require('../styles/styles');
    return (
      <Image source={require('../img/detbg.jpg')} style={style.backgroundImageDetail}>
      <Button
        onPress={()=>back()}
        title="Back"
        color="#9c3424"
        accessibilityLabel="The International"/>

        <Text style={style.text}>{this.props.place.name}</Text>
        <Image source={{uri: this.props.place.urlImage}} style={style.imageDetail}/>
        <Text style={style.textAddress}>{this.props.place.address}</Text>
        <MapView
          style={style.imageDetail}
          initialRegion={{
            latitude: this.props.place.lat,
            longitude: this.props.place.lng,
            latitudeDelta: 0.0092,
            longitudeDelta: 0.0042,
            pitchEnabled: true,

          }}>

          <MapView.Marker
                coordinate={{
                    latitude: this.props.place.lat,
                    longitude: this.props.place.lng,
                  }}
                title={this.props.place.name}
                description={this.props.place.address}
              />

          </MapView>
      </Image>

    );
  }

}

const back = () => {
  myNav.pop();
};
