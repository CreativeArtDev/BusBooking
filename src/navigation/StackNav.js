/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LoginScreen from '../../src/containers/Screens/LoginScreen'
import HomeScreen from '../../src/containers/Screens/HomeScreen'
import AppNavigator from './AppNavigator'

import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Button, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Header, Title, Icon, Footer, FooterTab } from 'native-base'
import { DrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'



export default class StackNav extends Component {


  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: AppNavigator,
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

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
