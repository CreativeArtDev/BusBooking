
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';



export default class StatusCard2 extends Component {
    constructor(props) {
        super(props)
    }

    isValid() {
        let Valid = this.myDateText.isValid();

        let rawValue = this.myDateText.getRawValue();
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={[styles.line, { justifyContent: 'space-around' }]}>
                    <Text style={{ color: '#085394', fontWeight: 'bold' }}>Booking Status</Text>
                    <Text style={{ color: '#085394' }}>Confirmed or not available</Text>
                </View>
                <View style={styles.status}>
                    <View style={styles.statusLeft}>
                        <Image style={styles.statusImage} source={require('../../images/bus1.png')} />
                    </View>
                    <View style={styles.statusRight}>
                        <View style={styles.statusCrn}>
                            <Text style={styles.textCrn}>CRN:</Text>
                            <Text style={styles.textCrn}>6677888</Text>
                        </View>
                        <View style={styles.statusInfo}>
                            <View style={{ flexDirection:'row', }}>
                                <Text style={styles.textBoard}>Boarding Point</Text>
                                <Text style={styles.textBoard}>Date:</Text>
                                <Text style={styles.textBoard}>11/9/18</Text>
                                <Text style={styles.textBoard}>Time</Text>
                                <Text style={styles.textBoard}>11:22:12</Text>
                            </View>
                            <View>
                                <Text style={styles.textBoard}>11, Freeway, NY</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        height: 200,
        justifyContent: 'center'
    },
    content: {
        marginTop: 2,
    },
    contentImage: {
        marginTop: 2,
        height: 100
    },
    line: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 30,
        margin: 5
    },
    outline: {
        borderWidth: 2,
        borderColor: 'lightgray',
        marginLeft: 5,
    },
    phoneNum: {
        width: 70,
        textAlign: 'center',
        color: 'black'
    },
    statusImage: {
        height: 72,
        width: 100,
    },
    status: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4,
    },
    statusLeft: {
        backgroundColor:'blue'
    },
    statusRight: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width:'100%'
    },
    statusCrn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'lightgray',
        height: 30,
        margin:2
    },
    statusInfo: {
        marginTop: 10,
        flexDirection: 'column',
        height: 30,
        borderWidth: 2,
        borderColor: 'lightgray',
        margin:2
    },
    textCrn: {
        fontWeight: 'bold',
        color: 'black'
    },
    textBoard: {
        fontSize: 10,
        color: 'black',
        marginLeft:4
    }

})
