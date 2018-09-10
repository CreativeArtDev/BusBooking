//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types'
import styles from './styles'
// create a component
class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     
        <View style={styles.container}>
          <View style={styles.info}>
              <Text style={styles.text}>XYZ</Text>
              <Text style={styles.text}>Travels: </Text>
              <Text style={styles.text}> From </Text>
              <Text style={styles.text}>New York</Text>
              <Text style={styles.text}> to </Text>
              <Text style={styles.text}>New Jersey</Text>
          </View>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../images/bus6.png')} />
          </View>
        </View>
   
    );
  }
}

Button.propTypes = {

}
//make this component available to the app
export default Button;
