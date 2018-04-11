import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
 } from 'react-native';

import MyScreen from './app/page/HomeScreen';

export default class HelloWorldApp extends Component {
  render() {
    return <MyScreen />;
  }
}