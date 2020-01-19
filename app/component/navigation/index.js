import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthHandler from './AuthHandler';
import AuthStack from './AuthNavigator';
import AppStack from './AppNavigator';

export default createAppContainer( // eslint-disable-line
    createSwitchNavigator(
      {
          AppStack,
          AuthStack,
          AuthHandler,
      },
      {
        initialRouteName: 'AuthStack',
      },
    ),
  );