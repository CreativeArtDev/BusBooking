
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';
export default class DrawerItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={ styles.item } onPress={ ()=>{alert('hello')  }  }>
                    <Icon style={styles.icon} tintColor='blue' name={this.props.iconName} />
                    <Text style={styles.text}>{this.props.itemName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height:50
    },
    item: {
        flexDirection:'row',
        width:'100%',
        borderBottomWidth:0.3,
        borderColor:"black"
    },
    icon: {
        tintColor:'blue',
        marginLeft: 16,
    },
    text: {
        fontSize:16,
        color: 'white',
        marginLeft: 22,
    }
});
