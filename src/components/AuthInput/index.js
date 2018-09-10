
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
    static defaultProps = {
        placeholder: '',
        nextType: 'next',
        isPassword: false,
        keyboardType: 'default',
        initVal: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            value: props.initVal == '' ? '' : props.initVal
        }
    }
    componentDidMount() {

    }
    componentWillMount() {
       // this.props.onRefs(this)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.initVal == this.props.initVal) return
        this.setState({
            value: nextProps.initVal
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    //value={this.state.value}
                    style={styles.input}
                    placeholder={this.props.placeholder}
                   
                    returnKeyType={this.props.nextType}
                    autoCapitalize={'none'}
                    underlineColorAndroid={'transparent'}
                    keyboardType={this.props.keyboardType}
                    multiline={false}
                    onSubmitEditing={() => this.props.onNext()}
                    ref={(c) => { this.text = c }}
                    secureTextEntry={this.props.isPassword}
                />
            </View>
        );
    }
    getVaule = () => {
        return this.state.value
    }

    setFocus = () => {
        this.text.focus
    }

    setValue = (val) => {
        this.setState({
            value: val
        })
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        //backgroundColor: 'yellow',
    },
    input: {
     
        borderRadius: 2,
        width:250,
        margin:5,
        padding: 4,
        height:30,
        backgroundColor: '#e5e5e5',
        
    }
});
