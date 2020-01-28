import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen, RegisterScreen,ForgotPassScreen} from "../../screen"


const AuthStack = createStackNavigator({   
    LoginScreen: LoginScreen,
    ForgotPassScreen: ForgotPassScreen,
    RegisterScreen: RegisterScreen
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default AuthStack;