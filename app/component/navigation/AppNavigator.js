import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, SearchScreen,DownloadScreen,ProfileScreen, SpecificMovieScreen } from "../../screen"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'

const HomeScreenStack = createStackNavigator({   
  HomeScreen: HomeScreen,
  SpecificMovieScreen: SpecificMovieScreen

},
{
  initialRouteName: 'HomeScreen',
});

const AppStack = createBottomTabNavigator ({
  'Home': {screen: HomeScreenStack,
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,  
            },
  }
  ,
  'SearchScreen': {screen: SearchScreen,
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