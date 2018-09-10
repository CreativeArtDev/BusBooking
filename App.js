/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LoginScreen from './src/containers/Screens/LoginScreen'
import HomeScreen from './src/containers/Screens/HomeScreen'
import BookingScreen from './src/containers/Screens/BookingScreen'
import BookingHistoryScreen from './src/containers/Screens/BookingHistoryScreen'
import BookedBusScreen from './src/containers/Screens/BookedBusScreen'
import CategorySearchScreen from './src/containers/Screens/CategorySearchScreen'

import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet,Button, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Header, Title,  Icon, Footer, FooterTab } from 'native-base'
import { DrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'
import StackNav from './src/navigation/StackNav'
import AppNavigator from './src/navigation/AppNavigator'
import DrawerItem from './src/components/DrawerItem'



export default class App extends Component {
  render() {
    return (
     <StackNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: '#4000ff',
    margin: 20
  },
  title: {
    color: 'black'
  },
});
