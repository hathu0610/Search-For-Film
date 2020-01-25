import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen, HomeScreen } from "../../screen"
const AppStack = createStackNavigator({   
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: 'HomeScreen',
  });

export default AppStack;