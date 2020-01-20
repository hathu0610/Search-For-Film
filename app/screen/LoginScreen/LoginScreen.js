import React, { Component } from 'react'
import { Text, View, ImageBackground,Image,TextInput,Button} from 'react-native'
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
                    <View style = {styles.moviebutton}>
                        <Image source = {require('../../component/images/LoginScreen/movie-player-play-button.png')} style = {{width:'100%',height:'100%'}}></Image>
                    </View>
                    <View>
                        <Text style = {styles.logotext}> PHOTOPLAY</Text>
                    </View>
                </View>
                <View style ={{ height : "50%", paddingLeft :'15%'}}> 
                <View >
                    <Text style = {styles.title}> Email</Text>
                </View>
                <View>
                    <TextInput style = {styles.inputbox}/>
                </View>
                <View style ={{paddingTop: 10}}>
                    <Text style = {styles.title}> Password</Text>
                </View>
                <View>
                    <TextInput style = {styles.inputbox}/>
                </View>
                <View>
                <CustomButton title = "LOGIN" buttoncolor = "#ffbb3b" textcolor = 'white'/>
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
