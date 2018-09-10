
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


export default class StatusCard extends Component {
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
                        <View style={[styles.line, {justifyContent:'space-around'}]}>
                            <Text style={{color:'#085394', fontWeight:'bold'}}>Booking Status</Text>
                            <Text style={{color:'#085394'}}>Confirmed or not available</Text>
                        </View>
                        <View style={styles.status}>
                            <View style={styles.statusLeft}>
                                <Image style={styles.statusImage} source={require('../../images/bus1.png')} />
                            </View>
                            <View style={styles.statusRight}>
                                <View style={styles.statusCrn}>
                                    <Text>CRN:</Text>
                                    <Text>6677888</Text>
                                </View>
                                <View style={styles.statusInfo}>
                                    <Text>Boarding Point</Text>
                                    <Text>Date:</Text>
                                    <Text>11/9/18</Text>
                                    <Text>Time</Text>
                                    <Text>11:22:12</Text>
                                    <Text>11, Freeway, NY</Text>
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
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    businfo: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#4000ff'

    },
    infoText: {
        textAlign: 'center',
        backgroundColor: '#4000ff',
        borderWidth: 2,
        borderColor: 'white',
        color: 'white'
    },
    banner: {
        width: '100%',
        marginTop: 10
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
    dateField: {
        borderWidth: 2,
        borderColor: 'lightgray',
        marginLeft: 5,
        width: 100

    },

    timeField: {
        borderWidth: 2,
        borderColor: 'lightgray',
        marginLeft: 20,
        width: 100

    },
    phoneNum:{
         width: 70, 
         textAlign: 'center', 
         color:'black'
    },
    statusImage: {
        height: 100,
        width: 120,
    },
    status: {
        alignItems:'center',
        flexDirection: 'row',
        padding:4
    },
    statusRight: {
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    statusCrn: {
        flexDirection: 'row',
        alignItems:'center',
        borderWidth:2,
        borderColor:'lightgray',
        height: 45,
    },
    statusInfo: {
        marginTop:10,
        flexDirection:'row',
        height: 45,
        borderWidth:2,
        borderColor:'lightgray',
        alignItems:'center'
    }

})
