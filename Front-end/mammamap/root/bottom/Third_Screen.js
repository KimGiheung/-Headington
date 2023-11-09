import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const loginAlert = () => {
  Alert.alert(
    '로그인에 실패하였습니다.', '현재 로그인 기능을 사용할 수 없습니다.', [{
      text: '취소'
    }]
  )
}
const defaultAlert = () => {
  Alert.alert(
    '오류', '현재 해당 기능을 사용할 수 없습니다.', [{
      text: '취소'
    }]
  )
}

const Third_Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>설정</Text>
      </View>
      <ScrollView>
        <View style={styles.loginView}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {loginAlert()
            }}
          >
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>일반</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>보안</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>화면</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>글꼴</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>문의사항</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>QnA</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>버전 정보</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
        <TouchableOpacity style={styles.contentView} onPress={()=> {defaultAlert()}}><Text style={styles.contentText}>권한</Text></TouchableOpacity>
        <View style={styles.underLine}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header : {
    height : 60,
    justifyContent : 'center',

  },
  headerText :  {
    marginLeft : 15,
    fontSize : 27,
    color : 'black'
  },
  loginView: {
    alignItems: 'center',
    justifyContent: 'center',
    height : 220,
    backgroundColor: '#fff9db'
  },
  loginButton : {
    borderRadius : 10,
    paddingHorizontal : 15,
    paddingVertical : 7,
    backgroundColor : "yellow"
  },
  loginText : {
    color : "gray",
    fontSize : 30
  },
  underLine : {
    backgroundColor : 'gray',
    height : 1
  },
  contentView : {
    height : 60,
    justifyContent: "center",
  },
  contentText : {
    fontSize : 23,
    color: 'black',
    marginLeft : 13
  }
});

export default Third_Screen;