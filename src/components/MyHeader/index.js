
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';

export default class MyHeader extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <TouchableOpacity onPress={() => { alert('hey') }}>
                        <Icon style={styles.icon} name='ios-menu'></Icon>
                    </TouchableOpacity>
                    <Title style={styles.title}>Current Location</Title>
                    <TouchableOpacity onPress={() => { alert('hey') }}>
                        <Icon style={styles.icon} name='notifications'></Icon>
                    </TouchableOpacity>

                </Header>
            </Container>
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
    button: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        color: 'blue',
        margin: 20
    },
    title: {
        color: 'black'
    }
});
