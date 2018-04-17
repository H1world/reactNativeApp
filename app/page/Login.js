import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { loginStyle } from '../layout/loginStyle.js';
import { Button, List, Badge, InputItem } from 'antd-mobile';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show_2:false,
      phoneNum: '',
      passwordNum:'',
    }
  };

  changeText(name,text){
    if (name == 'phone'){
      if (text != '') {
        this.setState({
          phoneNum: text,
          show: true,
        });
      } else {
        this.setState({
          phoneNum: text,
          show: false,
        });
      }
    }
    if (name == 'password') {
      if (text != '') {
        this.setState({
          passwordNum: text,
          show_2: true,
        });
      } else {
        this.setState({
          passwordNum: text,
          show_2: false,
        });
      }
    }
    
  };

  clertNum(nameString) {
    if (nameString == 1) {
      this.setState({
        phoneNum: '',
        show: false,
      });
    }
    if (nameString == 2) {
      this.setState({
        passwordNum: '',
        show_2: false,
      });
    }
  };

  render() {
    return (
      <View style={loginStyle.container}>
        <StatusBar
          backgroundColor="#259461"
        />
        <Image
          source={require('../image/tzqlogo.png')}
          style={loginStyle.loginLogo}
        />
        <View style={loginStyle.InputBox}>
          <View style={loginStyle.InputBox_insid}>
            <Image
              source={require('../image/phone.png')}
              style={loginStyle.InputBox_img}
            />
            <TextInput style={loginStyle.inputText}
              // defaultValue= {this.state.phoneNum}
              value={this.state.phoneNum}
              onChangeText={(text) => this.changeText('phone',text)}
              underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
              placeholder='请输入手机号'
              placeholderTextColor='rgba(255,255,255,.6)'
            />
            <TouchableOpacity 
              onPress={() => this.clertNum(1)}
            >
              <Image
                source={this.state.show == false ? (null) : (require('../image/close.png'))}
                style={loginStyle.InputBox_img}
              />
            </TouchableOpacity>
          </View>
          <View style={loginStyle.InputBox_insid}>
            <Image
              source={require('../image/phone.png')}
              style={loginStyle.InputBox_img}
            />
            <TextInput style={loginStyle.inputText}
              value={this.state.passwordNum}
              onChangeText={(text) => this.changeText('password', text)}
              underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
              placeholder='请输入手机号'
              placeholderTextColor='rgba(255,255,255,.6)'
            />
            <TouchableOpacity
              onPress={() => this.clertNum(2)}
            >
              <Image
                source={this.state.show_2 == false ? (null) : (require('../image/close.png'))}
                style={loginStyle.InputBox_img}
              />
            </TouchableOpacity>
          </View>
        </View>
        

        <Button type="primary">登录</Button>
      </View>
    );
  }
}
export default Login;