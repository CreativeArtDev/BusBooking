import React from 'react';
import { createBottomTabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import { View, StyleSheet, TouchableOpacity } from 'react-native'

import LoginScreen from '../../src/containers/Screens/LoginScreen'
import HomeScreen from '../../src/containers/Screens/HomeScreen'
import BookingScreen from '../../src/containers/Screens/BookingScreen'
import BookingHistoryScreen from '../../src/containers/Screens/BookingHistoryScreen'
import BookedBusScreen from '../../src/containers/Screens/BookedBusScreen'
import CategorySearchScreen from '../../src/containers/Screens/CategorySearchScreen'
import SearchScreen from '../../src/containers/Screens/SearchScreen'



import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from './DrawerScreen';
import { Header, Icon, Title } from 'native-base';




const TabNav = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={styles.tabBarIcon} name='ios-home' size={24} color={tintColor} />
                )
            }
        },
        Category: {
            screen: CategorySearchScreen,
            navigationOptions: {
                tabBarLabel: 'Category',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={styles.tabBarIcon} name='ios-settings' size={24} color={tintColor}/>
                )
            }
        },
        History: {
            screen: BookedBusScreen,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (
                    <Icon style={styles.tabBarIcon} name='ios-search' size={24} color={tintColor} />
                )
            }
        },
    },
    {
        // tabBarOptions: {
        //     showLabel: 'false',
        //     showIcon: true,
        //     style: {
        //         backgroundColor: 'transparent'
        //     },
        //     inactiveTintColor: 'white',
        //     activeTintColor: '#e0ab18'
        // }
        tabBarOptions: {
            tinColor: '#5f5',
            activeTintColor: '#5e0',
            inactiveTintColor: '#eee',
            showIcon: true,
            showLabel: true,
            lazyLoad: true,
            upperCaseLabel: false,
            indicatorStyle: {
              backgroundColor: 'transparent'
            },
            style: {
              backgroundColor: '#324191',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0
            }
          }
    }
);

const main = (props) => (
    <View style={{ flex: 1 }}>
        <Header style={styles.header}>
            <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => props.navigation.openDrawer()}>
                <Icon style={styles.icon} name='ios-menu' color='#03A9F4' ></Icon>
            </TouchableOpacity>
            <Title style={styles.title}>Current Location</Title>
            <TouchableOpacity style={{ marginRight: -20, }} onPress={() => props.navigation.navigate('Booking')} >
                <Icon style={styles.icon} name='notifications'  color='#03A9F4' ></Icon>
            </TouchableOpacity>
        </Header>
        <TabNav />
    </View>
)
const notifications = StackNavigator({
    
    Main: main,
    Booking: BookingScreen,
  },
  {
    navigationOptions: {
      header: null
    }
  
});

export default Drawer = DrawerNavigator({
    Tabs: {
        screen: notifications
    },
    History: {
        screen: BookingHistoryScreen
    },
    
}, {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: props => <DrawerScreen {...props} />
    });



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
        color: '#324191',
        margin: 20
    },
    title: {
        color: 'black'
    },
    tabBarIcon: {
        color: '#eee'
    }
});