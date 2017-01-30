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

  backgroundImageDetail:{
    flex: 1,
    padding: 16,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  rowContainer:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },

  infoContainer:{
    flex: 1,
    padding: 8
  },

  image:{
    flex:1,
    height: 120
  },

  imageDetail:{
    flex: 1,
    margin: 16
  },

  text:{
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff'
  },

  textAddress:{
    fontSize: 12,
    color: '#ffffff',
    fontStyle: 'italic',
    textAlign: 'center'
  },

  loadingStyle:{
    backgroundColor: 'rgba(156, 52, 36, 0.45)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
