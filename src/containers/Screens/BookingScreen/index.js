
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
import StatusCard from '../../../components/StatusCard';

export default class BookingScreen extends Component {
    constructor(props) {
        super(props)
    }

    isValid() {
        let Valid = this.myDateText.isValid();

        let rawValue = this.myDateText.getRawValue();
    }
    goBack() {
        this.props.navigation.pop();
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <TouchableOpacity style={{ marginLeft: -20, flex:1.5 }} onPress={() => { this.goBack() }}>
                        <Icon style={styles.icon} name='ios-arrow-back'></Icon>
                    </TouchableOpacity>
                    <Title style={styles.title}>Current Location</Title>
                    
                </Header>
                <Content
                    scrollEnabled={false}
                    style={styles.content}>
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
                    <View >
                        <Image style={styles.contentImage} source={require('../../../images/bus3.png')} />
                        <View style={[styles.line,{width:'100%', marginLeft:20}]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black' }}>Date</Text>
                                <TextInputMask
                                    style={styles.dateField}
                                    refInput={(ref) => this.myDateText = ref}
                                    type={'datetime'}
                                    options={{
                                        format: 'DD-MM-YYYY HH:mm:ss'
                                    }}
                                />
                                <Icon style={{ marginLeft: 10 }} name='calendar' />
                            </View>
                            <TextInputMask
                                style={styles.timeField}
                                refInput={(ref) => this.myDateText = ref}
                                type={'datetime'}
                                options={{
                                    format: 'DD-MM-YYYY HH:mm:ss'
                                }}
                            />
                        </View>
                        <View style={styles.line}>
                            <View style={styles.line}>
                                <Text style={{ color: 'black' }}>Price/Seat</Text>
                                <Text style={{ marginLeft: 10, fontSize: 24, fontWeight: 'bold', color: 'black' }}>₹</Text>
                                <View style={[styles.outline, { width: 50 }]}>
                                    <Text style={styles.text}>200</Text>
                                </View>
                            </View>
                            <View style={styles.line}>
                                <Text style={{ color: 'black' }}>Total Seats in Bus</Text>
                                <View style={[styles.outline, { width: 50 }]}>
                                    <Text style={styles.text}>8</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.line}>
                            <Text style={{ color: 'black' }}>Seats Available Now</Text>
                            <View style={[styles.outline, { width: 50 }]}>
                                <Text style={styles.text}>3</Text>
                            </View>
                        </View>
                        <View style={[styles.line, { justifyContent: 'flex-start' }]}>
                            <View style={styles.line}>
                                <Text style={{ color: 'black' }}>Name</Text>
                                <View style={[styles.outline, { width: 50 }]}>
                                    <Text style={styles.text}>'200'</Text>
                                </View>
                            </View>
                            <View style={styles.line}>
                                <Text style={{ color: 'black' }}>Booked Seats</Text>
                                <View style={[styles.outline, { width: 50 }]}>
                                    <Text style={styles.text}>8</Text>
                                </View>
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
                        {/* <View style={styles.status}>
                            <View style={styles.statusLeft}>
                                <Image style={styles.statusImage} source={require('../../../images/bus1.png')} />
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
                        </View> */}
                        <StatusCard />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
    text: {
        textAlign: 'center', color: '#085394'
    },
    icon: {
        color: '#085394',
        margin: 20
    },
    title: {
        color: 'black',
        flex:10.5,
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
    content: {
        marginTop: 2,
    },
    contentImage: {
        marginTop: 2,
        height: 100,
        width:'100%'
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
    phoneNum: {
        width: 70,
        textAlign: 'center',
        color: 'black'
    },
    statusImage: {
        height: 100,
        width: 120,
    },
    status: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 4
    },
    statusRight: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    statusCrn: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'lightgray',
        height: 45,
    },
    statusInfo: {
        marginTop: 10,
        flexDirection: 'row',
        height: 45,
        borderWidth: 2,
        borderColor: 'lightgray',
        alignItems: 'center'
    }

})
