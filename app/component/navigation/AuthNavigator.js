import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen} from "../../screen"


const AuthStack = createStackNavigator({   
    LoginScreen: LoginScreen
    
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default AuthStack;