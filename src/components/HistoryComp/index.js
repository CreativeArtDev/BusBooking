//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Icon } from 'native-base'

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
                <View style={styles.iconArea}>
                    <Icon name='bus' style={styles.icon}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.line}>
                        <Text style={styles.text}>XYZ Travels</Text>
                        <Text style={styles.text}>From</Text>
                        <Text style={styles.text}>A</Text>
                        <Text style={styles.text}>To</Text>
                        <Text style={styles.text}>B</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>Date:</Text>
                        <Text style={styles.text}>17 July 2018</Text>
                        <Text style={styles.text}>Depature Time:</Text>
                        <Text style={styles.text}>03:00 PM</Text>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.text}>Name:</Text>
                        <Text style={styles.text}>Michael Jones</Text>
                        <Text style={styles.text}>No of Seats:</Text>
                        <Text style={styles.text}>8</Text>
                        <Text style={styles.text}>Price/Seat</Text>
                    </View>
                    <Text style={styles.text}>Total Rs:</Text>
                </View>
            </View>

        );
    }
}

Button.propTypes = {

}
//make this component available to the app
export default Button;
