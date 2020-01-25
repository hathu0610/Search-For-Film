import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen, HomeScreen} from "../../screen"
import ForgotPassScreen from '../../screen/ForgotPassScreen/ForgotPassScreen';


const AuthStack = createStackNavigator({   
    LoginScreen: LoginScreen,
    ForgotPassScreen: ForgotPassScreen,
    //HomeScreen: HomeScreen

    
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default AuthStack;