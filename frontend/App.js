import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import Relay from 'react-relay';
import AppNavigator from './app/Navigation/AppNavigator'

import Mutation from './mutation';


let sandbox = "http://localhost:8080/graphql";
Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer(sandbox));

export default class App extends Component {

  
  render() {
    return (
      <AppNavigator />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  
  
});



AppRegistry.registerComponent('App', () => App);
