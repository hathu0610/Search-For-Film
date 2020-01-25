import React, { Component } from 'react'
import { Text, View, ImageBackground, FlatList,StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[],
          searchTerm: "Frozen"
         };
       }

       componentDidMount(){
        fetch('http://www.omdbapi.com/?s='+ this.state.searchTerm +'&apikey=480344f1&r=json')
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }


        renderItem=(data)=>
        <View>
            <Text >{data.item.Title}</Text>
        </View>

    render() {
        return (
            <View >
            <FlatList
    data= {this.state.dataSource}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
        />

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
     }
    });
