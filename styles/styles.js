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
  }

});
