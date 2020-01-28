import React, { Component } from 'react'
import { Text, View, ImageBackground,Image,TextInput,Button,TouchableHighlight,AsyncStorage} from 'react-native'
import {styles} from './LoginScreenStyle'
import {CustomButton} from '../../component/CustomButton'
import LinearGradient from 'react-native-linear-gradient';
import {InputBox} from '../../component/InputBox'
export default class LoginScreen extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          password:'',
          register: ''

        }
     }

     handleTextChange = (key,value) => {
        this.setState({[key]:value})
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem(this.state.username);
            if (value !== null) {
                // Our data is fetched successfully
                if (value === this.state.password){
                    this.setState({register:"pass"})
                    this.props.navigation.navigate('AppStack',{username:this.state.username})
                }
                else {
                    this.setState({register:"Wrong password. Try again"})
                }
            }
            else {
                this.setState({register:"Can't find any account with this name. You need to create a new account"})
            }
        } catch (error) {   
            this.setState({register:"Wrong password. Try again"})

             }
    }

    render() {
        return (
            <View style = {{flex:1,width:'100%', alignItems:'center'}}>
               <ImageBackground source = {require('../../component/images/LoginScreen/LoginBG.png')} style = {styles.libg} imageStyle= {{opacity:0.5}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffffff00','#ffffff00','#F2F2F2']} style={styles.linearGradient}>
                <View style = {styles.logobox}>
                <ImageBackground source = {require('../../component/images/LoginScreen/logo.config.png')} style = {styles.logobg}>
                </ImageBackground>
                    <View>
                        <Text style = {styles.logotext}> PHOTOPLAY</Text>
                    </View>
                </View>
                <View style ={{ height : "50%", paddingLeft :'15%'}}> 
                <View >
                    <Text style = {styles.title}> Username</Text>
                </View>
                <View>
                    <TextInput style = {styles.inputbox} placeholder = "username here" onChangeText={(text)=>{ this.handleTextChange('username',text) }}/>
                </View>                
                <View style ={{paddingTop: 10}}>
                    <Text style = {styles.title} > Password</Text>
                </View>
                <View >
                    <View style = {[styles.inputbox,{flexDirection:'row',justifyContent:'space-between'}]}>
                    <TextInput  placeholder = "password here" onChangeText={(text)=>{ this.handleTextChange('password',text) }}/>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('ForgotPassScreen')}>
                        <Text style = {[styles.heading,{fontWeight:'bold'}]} >FORGOT?</Text>
                    </TouchableHighlight>
                </View>

                </View>
                <View>
                <CustomButton title = "LOGIN" buttoncolor = "#ffbb3b" textcolor = 'white' buttonclick = {this._retrieveData}/>
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
                <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                    <Text style = {[styles.heading,{fontWeight:'bold'}]}> REGISTER</Text>
                </TouchableHighlight>
                </View >

                </ImageBackground>
                
            </View>
        )
    }
}
