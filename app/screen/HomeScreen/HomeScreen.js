import React, { Component } from 'react'
import { Text, View, Image, FlatList,StyleSheet,TouchableOpacity, ImageBackground } from 'react-native'
import {styles} from './HomeScreenStyle'
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        dataSource:[],
         };
       }

       componentDidMount(){
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b0673a0f&s=frozen')
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson.Search
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

        renderItem=(data)=>
        <TouchableOpacity >
        <Image style = {{width:100, height:100,resizeMode:'contain'}} source = {{uri: data.item.Poster}}></Image>
        </TouchableOpacity>

    render() {

        return (
            <View style ={styles.container}>
            <ImageBackground style = {{width:"100%", height:500,ImageResizeMode:'center',justifyContent:'flex-end',alignItems:'center'}} source = {require('../../component/images/HomeScreen/Dora.png')}>
            <Image style = {{width:289, height:200,resizeMode:'contain'}} source = {require('../../component/images/HomeScreen/Doralogo.png')}></Image>

            </ImageBackground>

            <Text style = {{fontSize: 33, fontFamily: 'Times New Roman'}}> 4.0 </Text>
            <Text style = {{fontSize: 15,marginTop:5,fontFamily: 'Times New Roman'}}> Movie   |   Adventure   |   Comedy   |   Family </Text>
            <View style ={{width:'100%',alignItems:'flex-start'}}>
                <Text style = {{color:"grey",fontSize: 20,margin:15,fontFamily: 'Arial',fontWeight:'bold'}}>Watching</Text>
            </View>
            <View style ={{height:100,width:'100%'}}>
                <FlatList 
                        data={this.state.dataSource}
                        renderItem={item=> this.renderItem(item)}
                        horizontal = {true}
                    // keyExtractor= {item=>item.Search.Title.toString()}
                />
            </View>

            </View>
        )
    }
}

