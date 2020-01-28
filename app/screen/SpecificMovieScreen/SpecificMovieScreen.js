import React, { Component } from 'react'
import { Text, View,ImageBackground,FlatList,Image } from 'react-native'
import { styles } from '../SpecificMovieScreen/SpecificMovieScreenStyle'
import LinearGradient from 'react-native-linear-gradient';
import {CustomButton} from '../../component/CustomButton'

export default class SpecificMovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          genre: [],
          imdbRating: "",
          plot: "",
          cast: [],
          dataSource: []
         };
       }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?i='+ this.props.navigation.getParam('imdbid', 'NO-ID')+ '&apikey=b0673a0f')
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           dataSource: responseJson,
           plot: responseJson.Plot,
           imdbRating: responseJson.imdbRating,
           genre: responseJson.Genre,
           cast: responseJson.Actors.split(", ")
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
    }
    renderItem=(data)=>      
    <View style = {{width: 130,height:130 }}>
    <Image style = {{width:100, height:100,resizeMode:'contain'}} source = {{uri:'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'}}></Image>
    <Text style= {{width: 120,alignItems:'center',color:'grey', fontFamily: 'Georgia'}}> {data.item} </Text>
    </View>   

    render() {
        return (
            <View style={{flex:1}}>
                <ImageBackground resizeMode= 'cover' style = {styles.bgimg} source = {{uri: this.props.navigation.getParam('Poster', 'NO-ID')}}imageStyle= {{opacity:0.5}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#ffffff00','#F2F2F2']} style={styles.linearGradient}>
                        <Text style = {styles.title}> {this.props.navigation.getParam('name', 'NO-ID')} </Text>
                        <Text style = {styles.genre}> {this.state.genre} </Text>
                    </LinearGradient>
                </ImageBackground>

                <Text style = {styles.imdbrate}> {this.state.imdbRating} </Text>
                <View style = {{width: '100%', height:110, justifyContent:"center"}}>
                    <Text style = {styles.plot}> {this.state.plot} </Text>
                </View>
                <View style = {{width:'100%',alignItems:'center'}}>
                <CustomButton title = "WATCH NOW" buttoncolor = "#ffbb3b" textcolor = 'white'/>
                </View>
                <View style ={{width:'100%',alignItems:'flex-start',marginTop:20}}>
                    <Text style = {{color:"grey",fontSize: 15,margin:15,fontFamily: 'Arial',fontWeight:'bold'}}>Cast</Text>
                </View>
                <View style ={{height:300,width:'100%',marginLeft:15}}>
                    <FlatList 
                            data={this.state.cast}
                            renderItem={item=> this.renderItem(item)}
                            horizontal = {true}
                            keyExtractor= {item=>item.toString()}
                    />
                </View>


            </View>
        )
    }
}
