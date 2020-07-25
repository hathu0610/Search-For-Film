import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity,Image, SafeAreaView} from 'react-native'
import { SearchBar } from 'react-native-elements';
import { styles } from './SearchScreenStyle';
import { ScrollView } from 'react-native-gesture-handler';
export default class SearchScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
    state = {
        search: '',
        dataSource: [],
        searchdata: []
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
      <SafeAreaView>
      <TouchableOpacity onPress={() => {
        this.props.navigation.navigate('SpecificMovieScreen',            {
          Poster: data.item.Poster,
          name: data.item.Title,
          imdbid: data.item.imdbID,

        });
      }} style = {{flexDirection: 'row'}}>    
          <Image style = {styles.img} source = {{uri: data.item.Poster}}></Image>
          <View>
                <Text style ={{fontSize:20,fontFamily: 'Georgia',}}>{data.item.Title}</Text>
                <Text style ={{fontFamily: 'Georgia',color:'#f9a115'}}>{data.item.Year}</Text>

          </View>
      </TouchableOpacity>  
      </SafeAreaView>

    render() {
        const { search } = this.state.search;
        let data = this.state.dataSource;
        let dataset = new Set();
        for (let property in data) {
          dataset.add(data[property].Type)
        }
       let newdataarray = Array.from(dataset)
       let finalobj = []
        for (let item in newdataarray) { 
          const film = {}       
          film.data = data.filter(film => film.Type === newdataarray[item])
          film.title = newdataarray[item]
          finalobj.push(film)
        }
        this.state.searchdata= finalobj
         //console.log(this.state.searchdata)

        return (
            <SafeAreaView style={styles.container}>
              <Text>{this.state.movieItems}</Text>
              <SearchBar lightTheme={true} 
                            containerStyle={{backgroundColor: '#f2f2f2',borderBottomColor:'#f2f2f2',borderTopColor:'#f2f2f2'}} 
                            inputContainerStyle = {{backgroundColor:'white',margin: 30}}
                            onChangeText={this.updateSearch}
                            value={search}
                            />  
                {this.state.searchdata.map((item) => {
                            return (
                            <View style = {{marginLeft: 30,marginRight: 30}}>
                              {item.title == "series"?
                                  <Text style = {{fontFamily: 'Georgia', paddingBottom: 20, color:'grey'}}> SERIES </Text> 
                                : <Text style = {{fontFamily: 'Georgia', paddingBottom: 20, color:'grey'}}> MOVIES </Text> 
                              }
                              <ScrollView style={{paddingBottom: 20}} horizontal={true}> 
                              {item.data.map((a)=> {
                                return (
                                  <SafeAreaView >
                                  <Image style = {{width:150, height:150,resizeMode:'contain'}} source = {{uri: a.Poster}}></Image>
                                  </SafeAreaView>
                                )
                              }
                              )}
                              </ScrollView>
                            </View>
                            )})
                  }
            </SafeAreaView>
        )
    }
}
