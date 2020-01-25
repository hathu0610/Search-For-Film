import React, { Component } from 'react'
import { Text, View,Image,TextInput, ImageBackground } from 'react-native'
import {styles} from '../LoginScreen/LoginScreenStyle'
import {CustomButton} from '../../component/CustomButton'

export default class ForgotPassScreen extends Component {
    render() {
        return (
            <View style = {{backgroundColor:'#F2F2F2',flex:1,alignItems:'center'}}>
                <View style ={styles.noborderlogobox}>
                <ImageBackground source = {require('../../component/images/LoginScreen/logo.config.png')} style = {styles.logobg}>
                </ImageBackground>
                    <View>
                        <Text style = {styles.logotext}> PHOTOPLAY</Text>
                    </View>
                </View>

                <Text style = {[styles.title,{width:'100%',textAlign:'center'}]} > FORGOT PASSWORD?</Text>
                <View style = {{width: '70%',height : 100}}>
                <Text style = {[styles.heading,{color:'grey',marginBottom:10,flex: 1, flexWrap: 'wrap'}]}> Enter the email address you used to create your account and we will email you a link to reset your password</Text>
                </View>
                <View style = {{width:'70%',justifyContent:'flex-start'}}>
                    <Text style = {styles.title}> Email</Text>
                </View>
                <View>
                    <TextInput style = {styles.inputbox} placeholder = "email here"/>
                </View>
                <CustomButton title = "SEND EMAIL" buttoncolor = "#ffbb3b" textcolor = 'white'/>

            </View>
        )
    }
}
