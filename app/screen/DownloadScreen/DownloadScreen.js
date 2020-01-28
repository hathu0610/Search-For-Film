import React, { Component } from 'react'
import { Text, View, FlatList,Image} from 'react-native'
import { styles } from './DownloadScreenStyle';

export default class DownloadScreen extends Component {
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
        <View style = {{flexDirection:'row'}}>      
            <Image style = {styles.img} source = {{uri: data.item.Poster}}></Image>
            <View>
                <Text style ={{fontSize:20}}>{data.item.Title}</Text>
                <Text>{data.item.Year}</Text>
            </View>
        </View>  

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                        data={this.state.dataSource}
                        renderItem={item=> this.renderItem(item)}
                        horizontal = {false}
                        keyExtractor= {item=>item.imdbID.toString()}
                />            
            </View>
        )
    }
}
