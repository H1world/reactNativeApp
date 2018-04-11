import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';
//导入stack导航组件
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';

class MyScreen extends React.Component {
  static navigationOptions = {
    title: '首页',//标题
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: '测试了啊 真的测试了啊 啊啊' })}
          title="点击"
        />
      </View>
    );
  }
}
//导航注册
const SimpleApp = StackNavigator({
  Home: { screen: MyScreen },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;
