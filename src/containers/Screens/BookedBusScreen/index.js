
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
import { TextInputMask } from 'react-native-masked-text'

import BookButton from '../../../components/BookButton'

import MapView from 'react-native-maps'

export default class HomeScreen extends Component {
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
                
                <Content scrollEnabled={false} style={styles.content}>
                    <View style={styles.businfo}>
                        <Text
                            style={styles.infoText}
                            multiline={false}
                            placeholder={'Search bus operators'}
                            placeholderTextColor={'gray'}
                            width={'100%'}
                        >
                            James Travels: SantaClara to LosAngeles
                            </Text>
                    </View>
                    <View>
                        <View style={[styles.line,]}>
                            <View style={styles.textBox}>
                                <Text style={styles.normalText}>Date of Booking</Text>
                                <Text style={styles.text}>07 July 2018</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.normalText}>Timing</Text>
                                <Text style={styles.text}>6:00 PM</Text>
                            </View>
                        </View>
                        <View style={styles.line}>
                            <View style={[styles.textBox, { alignItems: 'center' }]}>
                                <Text style={{ color: 'black' }}>Price/Seat</Text>
                                <Text style={{ marginLeft: 10, fontSize: 24, fontWeight: 'bold', color: 'black' }}>₹</Text>
                                <Text style={styles.text}>200</Text>
                            </View>
                        </View>
                        <View style={[styles.line, { justifyContent: 'flex-start' }]}>
                            <View style={styles.line}>
                                <Text style={[{ color: 'black', width:'20%' }, styles.outline]}>Name</Text>
                                <Text style={[styles.text, { color: 'black', width:'30%' }, styles.outline]}>William</Text>
                                <Text style={[styles.normalText, styles.outline, {width:'30%'}]}>Booked Seats</Text>
                                <Text style={[styles.text, styles.outline,{ width:'10%' }]}>8</Text>
                            </View>
                        </View>
                        <View style={[styles.line,]}>
                            <View style={styles.textBox}>
                                <Text style={styles.normalText}>Date of Booking</Text>
                                <Text style={styles.text}>07 July 2018</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.normalText}>Timing</Text>
                                <Text style={styles.text}>6:00 PM</Text>
                            </View>
                        </View>
                        <View style={styles.line}>
                            <Icon style={{ marginLeft: 10 }} name='call' />
                            <View style={[styles.outline, { width: 300, flexDirection: 'row' }]}>
                                <Text style={styles.phoneNum}>31111111</Text>
                                <Text style={styles.phoneNum}>22222223</Text>
                                <Text style={styles.phoneNum}>33333333</Text>
                                <Text style={styles.phoneNum}>34444444</Text>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <BookButton
                                    btnText={'Book'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.status}>
                            <View style={[styles.line, { justifyContent: 'space-around' }]}>
                                <Text style={{ color: '#085394', fontWeight: 'bold', marginLeft: -20 }}>Booking Status</Text>
                                <Text style={{ color: '#085394', marginLeft: 20 }}>Confirmed or not available</Text>
                            </View>
                            <View style={styles.statusDetail}>
                                <View style={styles.statusLeft}>
                                    <Image style={styles.statusImage} source={require('../../../images/bus1.png')} />
                                </View>
                                <View style={styles.statusRight}>
                                    <View style={styles.statusCrn}>
                                        <Text style={styles.textCrn}>CRN:</Text>
                                        <Text style={styles.textCrn}>6677888</Text>
                                    </View>
                                    <View style={styles.statusInfo}>
                                        <View style={{ flexDirection: 'row', }}>
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
                        </View>
                        <View style={styles.mapArea}>
                            <MapView 
                                style={{ ...StyleSheet.absoluteFillObject }}
                                initialRegion={{
                                    latitude: 59.00000003334,
                                    longitude: 18.0654454444,
                                    latitudeDelta: 0.1,
                                    longitudeDelta: 0.1,
                                }}>
                            </MapView>
                        </View>
                    </View>

                </Content>
                {/* <Footer>
                    <Text>footer</Text>
                </Footer> */}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    normalText: {
        color: 'black',
        fontSize: 12,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        textAlign: 'center',
        color: '#085394',
        fontSize: 12,
        marginLeft: 20
    },
    icon: {
        color: '#085394',
        margin: 20
    },
    title: {
        color: 'black'
    },
    content: {
        marginLeft:5,
        marginRight:5,
        flexDirection: 'column',
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    businfo: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#085394'

    },
    infoText: {
        textAlign: 'center',
        backgroundColor: '#085394',
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
    contentImage: {
        marginTop: 2,
        height: 100
    },
    line: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
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
    phoneNum: {
        width: 70,
        textAlign: 'center',
        color: 'black'
    },
    statusImage: {
        height: 70,
        width: 120,
    },
    status: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 4,
    },
    statusDetail: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    statusRight: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '100%'
    },
    statusCrn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'lightgray',
        height: 30,
    },
    statusInfo: {
        marginTop: 10,
        flexDirection: 'column',
        height: 30,
        borderWidth: 2,
        borderColor: 'lightgray',
        margin: 2,
        width: '100%'
    },
    textCrn: {
        marginLeft: 4,
        fontSize: 10,
        color: 'black',
    },
    textBoard: {
        marginLeft: 2,
        fontSize: 10,
        color: 'black',
        justifyContent: 'center'
    },
    mapArea: {
        backgroundColor: 'red',
        height: 220
    },
    map: {
        backgroundColor: 'red'
    }

})
