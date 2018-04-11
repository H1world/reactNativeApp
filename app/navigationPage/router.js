import React from 'react';
import { StackNavigator } from 'react-navigation';

import MyScreen from './page/HomeScreen';
import ChatScreen from './page/ChatScreen';

const SimpleApp = StackNavigator({
  Home: { 
    screen: MyScreen,
    navigationOptions: {
      // headerTitle: '详情',
      header: null,
      // tabBarVisible: false
    }
  },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;

