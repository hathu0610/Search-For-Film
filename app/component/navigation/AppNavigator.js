import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, SearchScreen,DownloadScreen,ProfileScreen, SpecificMovieScreen} from "../../screen"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

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

const SearchScreenStack = createStackNavigator({   
  SearchScreen: {screen: SearchScreen,
    navigationOptions: {
      header: null,
    }
  },
  SpecificMovieScreen: {screen: SpecificMovieScreen,
    navigationOptions: customizeNavigationOptions
  }

});

const HomeScreenStack = createStackNavigator({   
  HomeScreen: {screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  SpecificMovieScreen: {screen: SpecificMovieScreen,
    navigationOptions: customizeNavigationOptions
  }

});

const AppStack = createBottomTabNavigator ({
  'Home': {screen: HomeScreenStack,
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,  
            }
  }
  ,
  'SearchScreen': {screen: SearchScreenStack,
    navigationOptions:{  
        tabBarLabel:'Search',  
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={25} color={tintColor} />,  
    },
}
,
  'DownloadScreen': {screen: DownloadScreen,  
  navigationOptions:{  
      tabBarLabel:'Download',  
      tabBarIcon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />,  
          }
         }   ,
'ProfileScreen ': {screen: ProfileScreen ,  
  navigationOptions:{  
      tabBarLabel:'Profile',  
      tabBarIcon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />,  
          }
         }   ,
},
{  
initialRouteName: "Home",  
tabBarOptions: {
    activeTintColor: '#ffbb3b',
    inactiveTintColor: 'gray',
  }, 
barStyle: { backgroundColor: 'white' },  
}, 
);

export default AppStack;