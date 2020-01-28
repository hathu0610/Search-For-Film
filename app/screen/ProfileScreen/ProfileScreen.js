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
                        <Icon name="home" size={30}  />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3}}>Account</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="notifications" size={30}  />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3}}>Notifications</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="settings" size={30}  />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3}}>Settings</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="help" size={30}  />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3}}>Help</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginTop:20}}>
                        <Icon name="directions" size={30}  />
                        <Text style = {{fontSize:20,marginLeft:10,marginTop:3}}>Logout</Text>
                    </View>

                </View>
            </View>
        )
    }
}
