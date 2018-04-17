import { StyleSheet, Dimensions, hairlineWidth} from 'react-native';
import { toDips, toDipsWidth, toDipsHeight } from '../algorithm/countSize';
// import { comPany } from '../algorithm/company';
import { setSpText, scaleSize } from '../algorithm/company';

const { width, height } = Dimensions.get('window');


export const loginStyle = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#259461',
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  loginLogo:{
    width: scaleSize(295),
    height: scaleSize(382),
    marginTop: scaleSize(144),
  },
  loginLogo_s:{
    width: scaleSize(295),
    height: scaleSize(382),
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  InputBox:{
    marginTop: scaleSize(180), 
  },
  InputBox_insid:{
    flexDirection: 'row',
    width: width - scaleSize(180),
    borderBottomWidth: scaleSize(1),
    borderBottomColor:'#fff',
  },
  InputBox_img: {
    width: scaleSize(144),
    height: scaleSize(144),
  },
  inputText:{
    flex: 1,    
    color:'#fff',
    fontSize: scaleSize(48),
    backgroundColor:'#259461',
    height: scaleSize(144),
  },
  
  InputItemed:{
    flex: 1,
    width: width - scaleSize(180),
    height: scaleSize(144),
    backgroundColor: '#b00',
    borderBottomColor: '#fff',
  }
});