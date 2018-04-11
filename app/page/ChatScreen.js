import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button, List, Badge  } from 'antd-mobile';
// import { TabBar } from 'antd-mobile';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = {
    // title: ({ state }) => `Chat with ${state.params.user}`,
    title: '测试',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        {/* <Text>{params.user}</Text> */}
        
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png"
          extra={<Badge text={77} overflowCount={55} />}
          arrow="horizontal"
        >
          Content
        </List.Item>
        
        <Button type="primary">确定</Button>
        
      </View>
    );
  }
}
export default ChatScreen;