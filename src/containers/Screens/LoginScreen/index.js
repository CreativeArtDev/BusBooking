
import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Title, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import AuthInput from '../../../components/AuthInput'

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={require('../../../images/loginscreen.png')}
          style={{ width: '100%', height: '100%' }}
        > */}
        <View style={{}}>
          <View style={{ flex: 7.5 }}>
          </View>
          <View style={{ flex: 4.5 }}>
            <AuthInput
              placeholder={'Name'}
              width={'100%'}
            />
            <AuthInput
              placeholder={'Password'}
              width={'100%'}
            />
            <AuthInput
              placeholder={'email'}
              width={'100%'}
            />
            <AuthInput
              placeholder={'Mobile'}
              width={'100%'}
            />
            <View style={{ alignItems: 'center' }} >
              <TouchableOpacity
                style={{
                  backgroundColor: '#e5e5e5',
                  marginTop: 10,
                  height: 30,
                  width: 250,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{ color: 'black' }}
                  >Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#03A9F4'
  },
});
