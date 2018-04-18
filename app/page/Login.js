import React from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { loginStyle } from '../layout/loginStyle.js';
import { Button, List, Badge, InputItem } from 'antd-mobile';
//测试mobx
import AppState from '../../mobx/AppState';
import { observer } from 'mobx-react';
//实例化,导出
const APPState = new AppState();
@observer

//监听
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show_2:false,
      phoneNum: '',
      passwordType:true,
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
    };
    if (name == 'password'){
      this.setState({
        passwordNum: text,
      });
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
        // passwordNum: this.state.passwordNum,
        show_2: !this.state.show_2,
        passwordType: !this.state.passwordType,
      });
    }
  };

  _onPress () {
    console.log('点击了按钮');
  };

  clertBlur(){
    this.refs.textInput1.blur();
    this.refs.textInput2.blur();
  };

  selectionChange(event){
    // console.log(event);
    let length = (this.state.passwordNum).length
    event.nativeEvent.selection.start = length;
    event.nativeEvent.selection.end = length;
  };
  
  onReset(){
    APPState.resetTimer();
  };

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
        onPress={() => this.clertBlur()} >
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
                ref="textInput1"
                defaultValue={this.state.phoneNum}
                onChangeText={(text) => this.changeText('phone',text)}
                underlineColorAndroid='transparent'
                placeholder='请输入账号'
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
                source={require('../image/lock.png')}
                style={loginStyle.InputBox_img}
              />
              <TextInput 
                ref="textInput2"
                // selection={{0}}
                onSelectionChange={(event) => this.selectionChange(event)}
                defaultValue={this.state.passwordNum}
                onChangeText={(text) => this.changeText('password', text)}
                secureTextEntry={this.state.passwordType}
                style={loginStyle.inputText}
                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                placeholder='请输入密码'
                placeholderTextColor='rgba(255,255,255,.6)'
                  // tintColor = '#b00'
              />
              <TouchableOpacity
                onPress={() => this.clertNum(2)}
              >
                <Image
                  source={this.state.show_2 == false ? (require('../image/eye_close.png')) : (require('../image/eye_open.png'))}
                  style={loginStyle.InputBox_img}
                />
              </TouchableOpacity>
            </View>
            <TouchableHighlight style={loginStyle.buttonStyle} underlayColor={'#fff'} onPress={this._onPress}>
              <Text style={loginStyle.buttonText}>
                登录
              </Text>
            </TouchableHighlight>
          </View>

            <Text>
              当前的值是: {APPState.timer}
            </Text>
            <TouchableOpacity onPress={() => { this.onReset() }}>
              <Text style={{ backgroundColor: 'green', color: 'white', marginLeft: 30, fontSize: 20 }}>
                重置
              </Text>
            </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}
export default Login;