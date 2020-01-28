
import React, { Component } from 'react'
import { Text, View,TextInput,useState,TouchableOpacity,AsyncStorage } from 'react-native'
import {styles} from './RegisterScreenStyle' 
import {CustomButton} from '../../component/CustomButton'
import {InputBox} from '../../component/InputBox'

export default class Registerscreen extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          pass:''
        }
     }

    handleTextChange = (key,value) => {
        this.setState({[key]:value})
    }
    _storeData = async () => {
        try {
            await AsyncStorage.setItem(this.state.username, this.state.pass);
            this.props.navigation.navigate('LoginScreen')
        } catch (error) {
            // Error saving data
        }
    }
    render() {
        return (
            <View style ={styles.root}>
                <Text style={[styles.textheading,{fontSize:40,lineHeight: 50,paddingTop:50}]}>Create your account</Text>
                <View style={{flex:1,alignItems:'center'}}>
                    <InputBox title = "Username" placeholder = "Username here" onCT={(text)=>{ this.handleTextChange('username',text)}}/>
                    <InputBox title = "Password" placeholder = "Password here" onCT={(text)=>{ this.handleTextChange('pass',text)}}/>
                    <InputBox title = "Email" placeholder = "Email here" />
                    <CustomButton title="Register" buttonclick = {this._storeData} buttoncolor = "#ffbb3b" textcolor ="white"/>
                </View>
            </View>
        )
    } 
}