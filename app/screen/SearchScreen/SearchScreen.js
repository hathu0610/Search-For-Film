import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { styles } from './SearchScreenStyle';
export default class SearchScreen extends Component {
    state = {
        search: '',
        dataSource: []
      };

    updateSearch = search => {
        this.setState({ search });
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=b0673a0f&s=' + this.state.search )
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           dataSource: responseJson.Search
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
      };
    

      renderItem=(data)=>
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('SpecificMovieScreen',            {
          Poster: data.item.Poster,
          name: data.item.Title,
          imdbid: data.item.imdbID
        });
      }} style = {{flexDirection: 'row'}}>    
          <Image style = {styles.img} source = {{uri: data.item.Poster}}></Image>
          <View>
                <Text style ={{fontSize:20,fontFamily: 'Georgia',}}>{data.item.Title}</Text>
                <Text style ={{fontFamily: 'Georgia',color:'#f9a115'}}>{data.item.Year}</Text>
          </View>
      </TouchableOpacity>  

    render() {
        const { search } = this.state.search;

        return (
            <View style = {styles.container}>
              <SearchBar lightTheme={true} 
                            containerStyle={{backgroundColor: '#f2f2f2'}} 
                            inputContainerStyle = {{backgroundColor:'lightgrey'}}
                            onChangeText={this.updateSearch}
                            value={search}
                            />  
                <View >
                <FlatList 
                        data={this.state.dataSource}
                        renderItem={item=> this.renderItem(item)}
                        keyExtractor= {item=>item.imdbID.toString()}
                />
            </View>
            </View>
        )
    }
}
