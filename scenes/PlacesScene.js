import React, { Component } from 'react';
import { ListView, Text, View, Image, Button} from 'react-native';

var myNav;
export default  class PlacesScene extends Component {
  constructor(props) {
    super(props);
    myNav = this.props.navigator;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_botanic_park_afternoon.jpg",
          "name": "Jardim Botânico de Curitiba",
          "address": "Av. Professor Lothario Meissner x Rua Engenheiro Ostoja Roguski",
          "lat": -25.4430871,
          "lng": -49.2403687
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_opera_arame.jpg",
          "name": "Ópera de Arame",
          "address": "Rua João Gava, s/n. - Abranches",
          "lat": -25.385076,
          "lng": -49.276626
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_panoramic_tower.jpg",
          "name": "Torre Panorâmica",
          "address": "Rua Professor Lycio Grein Castro Vellozo, 191",
          "lat": -25.42418,
          "lng": -49.294361
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_museum_oscar_niemeyer.jpg",
          "name": "Museu Oscar Niemeyer",
          "address": "R. Marechal Hermes, 999",
          "lat": -25.410412,
          "lng": -49.266944
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_tangua_park.jpg",
          "name": "Parque Tanguá",
          "address": "Rua Oswaldo Maciel, 0",
          "lat": -25.37882,
          "lng": -49.281578
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_bacacheri_park.jpg",
          "name": "Parque Bacacheri",
          "address": "Rua Paulo Nadolny.",
          "lat": -25.391102,
          "lng": -49.232866
        },
        {
          "urlImage": "https://raw.githubusercontent.com/AlvarDev/HostJson/master/img_barigui_park.jpg",
          "name": "Parque Barigui",
          "address": "Avenida Candido Hartmann",
          "lat": -25.423012,
          "lng": -49.308713
        }
      ])
    };
  }
  render() {
    return (
      <Image source={require('../img/placesbg.jpg')} style={{flex: 1, width: null,
      height: null, resizeMode: 'cover',}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => rowLayout(rowData) }
        />
      </Image>
    );
  }
}

const rowLayout= (rowData) => {
  var style = require('../styles/styles');
  return (

    <View style={style.rowContainer}>
      <Image source={{uri: rowData.urlImage}} style={style.image}/>
      <View style={style.infoContainer}>
        <Text style={{textAlign: 'justify', fontSize: 12, fontWeight: 'bold', color: '#ffffff'}}>{rowData.name}</Text>
        <Text style={{textAlign: 'justify', fontSize: 12, marginBottom:8, color: '#ffffff'}}>{rowData.address}</Text>
        <Button
          onPress={()=>goToDetails(rowData)}
          title="Details"
          color="#9c3424"
          accessibilityLabel="The International"/>
      </View>
    </View>
  );
};

const goToDetails = (placeItem) => {
  myNav.push({
    name: 'DetailScene',
    passProps: {
      place: placeItem
    }
  })
};







































/**  **/
