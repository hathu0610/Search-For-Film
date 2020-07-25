/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigation from './app/component/navigation'
import {ThemeProvider, ThemeConsumer} from 'react-native-elements';
import { Text, View, Image, FlatList,StyleSheet,TouchableOpacity, ImageBackground,StackNavigator } from 'react-native'


const theme = {
  view: {
    width: 120,
    height: 120,
    backgroundColor: 'black'
  }
}
const MyComponent = () => {
  return (<ThemeConsumer>
    {({theme}) => <View style = {theme.view}  ></View>}
    </ThemeConsumer>
  )
}

export default class App extends React.Component {
  render() {
    return (
     /*<ThemeProvider theme = {theme}>
        <MyComponent/>
    </ThemeProvider>*/
    <Navigation/> 
      );
  }
}
