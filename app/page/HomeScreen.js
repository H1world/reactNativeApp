/*@flow*/
import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
//导入stack导航组件
import { StackNavigator, TabNavigator } from 'react-navigation';
import { SearchBar, Button, Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
// import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
//网易banner接口
import ChatScreen from './ChatScreen';
import SeleHead from '../components/commonHead';

const { width, height } = Dimensions.get('window');

var NetEaseMusicBanner = "http://104.224.160.73:8888/banner";
//样式
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  newContainer: {
    backgroundColor: '#b00',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    color: '#000',
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  navIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchBox: {
    width: width * 0.7,
    height: 30,
    borderColor: 'black',
    flexDirection: 'row',   // 水平排布
    borderRadius: 10,  // 设置圆角边
    backgroundColor: '#FFF',
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: 'gray',
    alignItems: 'center',
    marginLeft: 8,
    paddingTop: 0,
    marginTop: 2,
    marginBottom: 2,
    paddingBottom: 0,
    marginRight: 8,
  },
  inputIcon: {//搜索图标
    height: 20,
    width: 20,
    marginLeft: 5,
    resizeMode: 'stretch'
  },
  inputText: {//搜索框
    backgroundColor: 'transparent',
    fontSize: 13,
    paddingBottom: 0,
    paddingTop: 0,
    flex: 1,
  },
  banner: {
    // width: 750,
    height: 176,
  }
});
class MyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'美食',
      data: [],
      loaded: false,
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
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }} style={styles.navLeft}>
        <Image source={require('../image/musicIcon.png')} style={styles.navIcon} />
      </TouchableOpacity>
    )
  }
  // 头部中间
  renderTitleItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Search') }}>
        {/* <View style={styles.searchBox}>
          
        </View> */}
        <View style={styles.searchBox}>
          {/* <SearchBar 
            placeholder="Search" 
            maxLength={8} 
            value={this.state.value}
            style={{width:width}}
            onCancel={() => {value==''}}
          />           */} 
          <Image source={require('../image/select.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputText}
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
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('MessageCenter') }} style={styles.navRight}>
        <Image source={require('../image/note.png')} style={styles.searchIcon} />
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
                style={styles.banner}
              />
            ))}
          </Carousel>
        </WingBlank>

        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
        />
      </View>
      
    );
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
    <View style={styles.container}>
      <Image
        source={{ uri: item.pic }}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.typeTitle}</Text>
        <Text style={styles.year}>{item.targetId}</Text>
      </View>
    </View>
  );
}
//底部--公共部位
const MainScreenNavigator = TabNavigator({
  Home: {
    screen: MyScreen,
    navigationOptions: {
      header: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          // source={require('./image/bar_home_nomarl@3x.png')}
          // style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  Certificate: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          // source={require('./image/bar_center_normal@3x.png')}
          // style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
}, {
    animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#008AC9', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        backgroundColor: '#fff', // TabBar 背景色
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  });


//导航注册
const SimpleApp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
  }
});

export default SimpleApp;