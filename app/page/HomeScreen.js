/*@flow*/
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
//导入stack导航组件
import { StackNavigator, TabNavigator } from 'react-navigation';
import { SearchBar, Button, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { homeStyle } from '../layout/style.js';
import SeleHead from '../components/commonHead';

//接口
var NetEaseMusicBanner = "http://104.224.160.73:8888/banner";
//样式
export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'美食',
      data: [],
      loaded: false,
      refreshing: false,
    }
    this.fetchBannerData = this.fetchBannerData.bind(this);
  }
  
  componentDidMount() {
    this.fetchBannerData();
  }
  
  fetchBannerData() {
    fetch(NetEaseMusicBanner).then((response) => response.json())
      .then((responseData) => {
        this.setState({
          data: this.state.data.concat(responseData.banners),
          loaded: true,
        });
      });
  }

  // 头部左侧
  renderLeftItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={homeStyle.navLeft}>
        <Image source={require('../image/musicIcon.png')} style={homeStyle.navIcon} />
      </TouchableOpacity>
    )
  }
  // 头部中间
  renderTitleItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }}>
        {/* <View style={styles.searchBox}>
          
        </View> */}
        <View style={homeStyle.searchBox}>
          {/* <SearchBar 
            placeholder="Search" 
            maxLength={8} 
            value={this.state.value}
            style={{width:width}}
            onCancel={() => {value==''}}
          />           */} 
          <Image source={require('../image/select.png')} style={homeStyle.inputIcon} />
          <TextInput style={homeStyle.inputText}
            // onChangeText={(text) => this.changeText(text)}
            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
            placeholder='搜索' />
          

        </View> 
      </TouchableOpacity>
    )
  }
  // 头部右侧
  renderRightItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('MessageCenter') }} style={homeStyle.navRight}>
        <Image source={require('../image/note.png')} style={homeStyle.searchIcon} />
      </TouchableOpacity>
    )
  }

  // changeText(text){

  // }

  render() {
    const { navigate } = this.props.navigation;
    // var movie = NetEaseMusicBanner[0];
    if (this.state.loaded == false) {
      return this.renderLoadingView();
    }
    return (
      // <View>
      //   <Text>Hello, Chat App!</Text>
      //   <Button
      //     onPress={() => navigate('Chat', { user: '测试了啊 真的测试了啊 啊啊' })}
      //     title="点击"
      //   />
      // </View>
      <View>
        <SeleHead
          leftItem={() => this.renderLeftItem()}
          titleItem={() => this.renderTitleItem()}
          rightItem={() => this.renderRightItem()}
        />
        <WingBlank>
          <Carousel
            slideWidth={1}
            autoplay
            infinite
            autoplayInterval={5000}
          >
            {this.state.data.map(val => (
              <Image
                source={{ uri: val.pic }}
                style={homeStyle.banner}
              />
            ))}
          </Carousel>
        </WingBlank>

        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={homeStyle.list}
          onRefresh={this.onRefresh}
          refreshing={this.state.refreshing}
        />
      </View>
      
    );
  } 

  //Flatlist下拉刷新
  onRefresh = () => {
    //设置刷新状态为正在刷新
    this.setState({
      refreshing: true,
    });
    //延时加载
    const timer = setTimeout(() => {
      clearTimeout(timer);
      //往数组的第一位插入数据，模拟数据新增 , unshift()会返回数组的长度
      this.state.data.unshift(new this.ItemData('https://pic2.zhimg.com/v2-8f11b41f995ca5340510c1def1c003d1.jpg',
        '下拉刷新添加的数据——————' + this.count, 475843));
      this.count++;
      this.setState({
        refreshing: false,
      });
    }, 1500);
  };

  ItemData(images, title, id) {
    this.pic = images;
    this.typeTitle = JSON.stringify(title);
    this.targetId = id;
  }


  renderLoadingView() {
    return (
      <View>
        <Text>
          正在加载数据……
        </Text>
      </View>
    );
  }

  renderMovie = ({ item, index }) => (
    <View style={homeStyle.container}>
      <Image
        source={{ uri: item.pic }}
        style={homeStyle.thumbnail}
      />
      <View style={homeStyle.rightContainer}>
        <Text style={homeStyle.title}>{item.typeTitle}</Text>
        <Text style={homeStyle.year}>{item.targetId}</Text>
      </View>
    </View>
  );
}