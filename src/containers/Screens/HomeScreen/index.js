
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


export default class HomeScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                
                <Content
                    scrollEnabled={true}
                    style={styles.content}>
                    <View style={styles.search}>
                        <View style={styles.searchArea}>
                            <Icon style={styles.searchIcon} name='search'></Icon>
                            <TextInput
                                style={styles.searchText}
                                multiline={false}
                                placeholder={'Search bus operators'}
                                placeholderTextColor={'gray'}
                                width={'100%'}
                            />
                        </View>
                    </View>
                    <View style={styles.banner}>
                        <ScrollView horizontal={true}>
                            <Image style={styles.image} source={require('../../../images/bus1.png')} />
                            <Image style={styles.image} source={require('../../../images/bus2.png')} />
                            <Image style={styles.image} source={require('../../../images/bus3.png')} />
                            <Image style={styles.image} source={require('../../../images/bus4.png')} />
                            <Image style={styles.image} source={require('../../../images/bus5.png')} />
                            <Image style={styles.image} source={require('../../../images/bus6.png')} />
                        </ScrollView>
                    </View>
                    <View style={styles.content}>
                        {/* <FlatList
                            data={[{ name: "bob" }, { name: 'tim' }, { name: 'no' }, { name: 'stress' }]}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index}
                            ItemSeparatorComponent={this.renderSeparator}
                        /> */}
                        <ScrollView horizontal={false}>
                            <Image style={styles.contentImage} source={require('../../../images/bus1.png')} />
                            <Image style={styles.contentImage} source={require('../../../images/bus2.png')} />
                            <Image style={styles.contentImage} source={require('../../../images/bus3.png')} />
                            <Image style={styles.contentImage} source={require('../../../images/bus4.png')} />
                            <Image style={styles.contentImage} source={require('../../../images/bus5.png')} />
                            <Image style={styles.contentImage} source={require('../../../images/bus6.png')} />
                        </ScrollView>
                    </View>
                    <Footer></Footer>
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
    icon: {
        color: '#4000ff',
        margin: 20
    },
    title: {
        color: 'black'
    },
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor:'red'
    },
    searchArea: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        width: 250,
        height: 35,
       // backgroundColor:'yellow'
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchText: {
       padding: 4
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
    }

});
