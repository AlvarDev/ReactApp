'use strict';
var React = require('react-native');
var { StyleSheet } = React;

module.exports = StyleSheet.create({
  mySceneCointainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mySceneImage: {
    width: 170,
    height: 100,
    marginBottom: 56,
    resizeMode: 'cover'
  }

});
