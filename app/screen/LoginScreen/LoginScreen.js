import React, { Component } from 'react'
import { Text, View, ImageBackground,Image,TextInput,Button} from 'react-native'
import {styles} from './LoginScreenStyle'
import {CustomButton} from '../../component/CustomButton'
export default class LoginScreen extends Component {
    render() {
        return (
            <View style = {{height:'100%'}}>
                <ImageBackground source = {require('../../component/images/LoginScreen/LoginBG.png')} style = {styles.libg} imageStyle= {{opacity:0.5}}>
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
                <View ><Text style = {styles.heading}> Social Logins</Text></View>
                <View styles = {{width:500,flexDirection:'row',backgroundColor:'black',height:50}}>
                </View>
                <View style = {{width:'100%', height:100,backgroundColor:'black',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Image source = {require('../../component/images/LoginScreen/Facebook-button.png')} style = {styles.moviebutton}></Image>
                <Image source = {require('../../component/images/LoginScreen/Facebook-button.png')} style = {styles.moviebutton}></Image>

                </View>
                </ImageBackground>
                
            </View>
        )
    }
}
