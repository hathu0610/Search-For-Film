import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import {styles} from './ProfileScreenStyle'
import { Icon } from 'react-native-elements'

export default class ProfileScreen extends Component {


    render() {
        return (
            <View style ={styles.container}>
                <Image source = {require('../../component/images/AccountFile/profilepic.jpg')} style ={styles.circle}/>
                <Text style={[styles.textheading,{fontSize:27}]}>{this.props.navigation.dangerouslyGetParent().getParam("username","Thu")}</Text>
                <View style ={{width:'80%',alignItems:'flex-start',marginTop:30,}}>
                    <View style = {{flexDirection:'row'}}>
                        <Icon name="home" size={30} color='#ffbb3b' />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3,fontFamily: 'Georgia'}}>Account</Text>
                    </View>
                    <View style ={{backgroundColor:'grey',width:'100%', height:1,marginTop:20}}></View>

                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="notifications" size={30} color='#ffbb3b' />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3,fontFamily: 'Georgia'}}>Notifications</Text>
                    </View>
                    <View style ={{backgroundColor:'grey',width:'100%', height:1,marginTop:20}}></View>

                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="settings" size={30} color='#ffbb3b'/>
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3,fontFamily: 'Georgia'}}>Settings</Text>
                    </View>
                    <View style ={{backgroundColor:'grey',width:'100%', height:1,marginTop:20}}></View>

                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="help" size={30} color='#ffbb3b' />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3,fontFamily: 'Georgia'}}>Help</Text>
                    </View>
                    <View style ={{backgroundColor:'grey',width:'100%', height:1,marginTop:20}}></View>

                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="directions" size={30} color='#ffbb3b' />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3,fontFamily: 'Georgia'}}>Logout</Text>
                    </View>

                </View>
            </View>
        )
    }
}
