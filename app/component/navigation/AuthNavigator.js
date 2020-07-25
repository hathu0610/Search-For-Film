import { createStackNavigator } from 'react-navigation-stack';
import {LoginScreen, RegisterScreen,ForgotPassScreen} from "../../screen"

const customizeNavigationOptions ={
  title:null,
        headerStyle: {
            backgroundColor: '#F2F2F2',
            shadowColor: 'transparent',
            backTitle: null,
          },
          headerTintColor: '#9B9B9B',
          headerBackTitle: 'BACK'
}

const AuthStack = createStackNavigator({   
    LoginScreen: {screen: LoginScreen,
      navigationOptions: {
        header: null,
      }},
    ForgotPassScreen: {screen: ForgotPassScreen,
      navigationOptions: customizeNavigationOptions
    },
    RegisterScreen: {screen: RegisterScreen,
      navigationOptions: customizeNavigationOptions}
      },
  {
    initialRouteName: 'LoginScreen',
  });

export default AuthStack;