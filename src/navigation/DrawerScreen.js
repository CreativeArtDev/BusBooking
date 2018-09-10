
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
    FlatList,
    ImageBackground
} from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Icon } from 'native-base';

import DrawerItem from '../components/DrawerItem'

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
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                    style={ styles.image }
                    flex= { 1 }
                    resizeMode='contain'
                    width={400}
                    height='100%'
                    source={require('../images/logo_bus.png') } />
                </View>
                <View style={styles.body}>
                    <View style={styles.content}>
                         <DrawerItem 
                            iconName={'md-log-out'}
                            itemName={'Logout'}
                        />
                        <DrawerItem 
                            iconName={'ios-home'}
                            itemName={'History'}
                        />
                         <DrawerItem 
                            iconName={'ios-settings'}
                            itemName={'Address'}
                        />
                         <DrawerItem 
                            iconName={'ios-home'}
                            itemName={'Payment'}
                        />
                        <DrawerItem 
                           iconName={'ios-home'}
                           itemName={'Support'}
                       />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 3,
        alignItems:'center'
    },
    body: {
        flex:9,
        //backgroundColor: "#1E2125"
        backgroundColor:'#03A9F4'
    },
    image: {
       width:120
    }

})
