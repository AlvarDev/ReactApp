'use strict';
var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  inputText: {
    height: 40,
    alignSelf: "stretch",
    marginBottom: 8,
    color: '#ffffff',
    fontSize: 12
  },

  backgroundImage:{
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems: 'center',
  },

  rowContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16
  },

  infoContainer:{
    flex: 1,
    padding: 8
  },

  image:{
    flex:1,
    height: 120
  },

  text:{
    textAlign: 'justify',
    fontSize: 12
  }

});
