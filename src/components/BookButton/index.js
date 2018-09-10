
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';

export default class BookButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={{ color: 'white' }}>{this.props.btnText}</Text>
                </View>
            </View>
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
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    container: {
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor:'#085394',
        width:'90%',
        height:30,
        alignItems:'center', 
        justifyContent:'center',
        shadowColor:'black',
    },
    icon: {
        color: 'blue',
        margin: 20
    },
    title: {
        color: 'black'
    }
});
