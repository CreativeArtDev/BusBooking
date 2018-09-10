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
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={this.props.source} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>{this.props.title} </Text>
            <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.textBody}>
              {this.props.content}
            </Text>
          </View>
          <View style={styles.newsInfo}>
            <Text style={styles.news}>{this.props.site}</Text>
            <Text style={styles.news}>{this.props.date}</Text>
          </View>
        </View>
   
    );
  }
}

Button.propTypes = {

}
//make this component available to the app
export default Button;
