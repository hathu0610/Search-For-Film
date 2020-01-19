import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen} from "../../screen"

const AppStack = createStackNavigator({   
    LoginScreen: LoginScreen
    
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default AppStack;