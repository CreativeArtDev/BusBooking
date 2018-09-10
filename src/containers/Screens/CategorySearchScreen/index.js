
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
import HomeCard from '../../../components/HomeCard'
import CategoryCard from '../../../components/CategoryCard'

export default class HomeScreen extends Component {


    renderItem = () => {
        return (
            
                <CategoryCard
                    
                />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
               
                <Content 
                scrollEnabled={true}
                style={styles.content}>
                    <View style={styles.content}>
                        <FlatList
                            data={[{ name: "bob" },{ name: "bob" },{ name: "bob" },{ name: "bob" },{ name: "bob" }, { name: 'tim' }, { name: 'no' }, { name: 'stress' }]}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString() }
                            ItemSeparatorComponent={this.renderSeparator}
                        />
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
    },
    searchArea: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        width: 250,
        height: 35,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchText: {

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
        marginTop:2,
        height: 100
    }

});
