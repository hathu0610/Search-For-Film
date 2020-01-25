import React, { Component } from 'react'
import { Text, View, ImageBackground,Image,TextInput,Button,  TouchableHighlight} from 'react-native'
import {styles} from './LoginScreenStyle'
import {CustomButton} from '../../component/CustomButton'
import LinearGradient from 'react-native-linear-gradient';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {{flex:1,width:'100%', alignItems:'center'}}>
               <ImageBackground source = {require('../../component/images/LoginScreen/LoginBG.png')} style = {styles.libg} imageStyle= {{opacity:0.5}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffffff00','#ffffff00','#ffffff','#F2F2F2']} style={styles.linearGradient}>
                <View style = {styles.logobox}>
                <ImageBackground source = {require('../../component/images/LoginScreen/logo.config.png')} style = {styles.logobg}>
                </ImageBackground>
                    <View>
                        <Text style = {styles.logotext}> PHOTOPLAY</Text>
                    </View>
                </View>
                <View style ={{ height : "50%", paddingLeft :'15%'}}> 
                <View >
                    <Text style = {styles.title}> Email</Text>
                </View>
                <View>
                    <TextInput style = {styles.inputbox} placeholder = "email here"/>
                </View>
                <View style ={{paddingTop: 10}}>
                    <Text style = {styles.title} > Password</Text>
                </View>
                <View >
                    <View style = {[styles.inputbox,{flexDirection:'row',justifyContent:'space-between'}]}>
                    <TextInput  placeholder = "password here"/>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('ForgotPassScreen')}>
                        <Text style = {[styles.heading,{fontWeight:'bold'}]} >FORGOT?</Text>
                    </TouchableHighlight>
                    </View>

                </View>
                <View>
                <CustomButton title = "LOGIN" buttoncolor = "#ffbb3b" textcolor = 'white' buttonclick = {() => this.props.navigation.navigate('AppStack')}/>
                </View>
                </View>
                </LinearGradient>
                <View style = {{height:30}}><Text style = {styles.heading}> Social Logins</Text></View>
                <View style = {{height:50,flexDirection:'row',justifyContent:'center'}}>
                <Image source = {require('../../component/images/LoginScreen/Facebook-button.png')} style = {[styles.moviebutton,{marginRight:30}]}></Image>
                <Image source = {require('../../component/images/LoginScreen/Facebook-button.png')} style = {styles.moviebutton}></Image>
                </View>

                <View style  = {{alignItems:'center'}}>
                <Text style = {[styles.heading,{color:'grey',marginBottom:10}]}> Don't have an account?</Text>
                <Text style = {[styles.heading,{fontWeight:'bold'}]}> REGISTER</Text>
                </View >

                </ImageBackground>
                
            </View>
        )
    }
}
