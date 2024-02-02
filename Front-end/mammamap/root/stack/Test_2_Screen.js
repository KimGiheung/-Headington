import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Linking,
  TextInput
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const SAMPLE_DEATAIL_DATA = {
  id: 1,
  sido: '부산',
  sigungu: '사하구',
  agencyname: '부산교통공사하단역',
  address: '부산 사하구 낙동남로 지하 1415 (하단동, 하단역)',
  location: '고객센터 내',
  phoneNumber: '051-678-6102',
  target: '외부인',
  fatherUsage: '가능'
}

const telAlert = () => {
  Alert.alert(
    SAMPLE_DEATAIL_DATA.agencyname + " 입니다.",
    "연락하시겠습니까 ? ",
    [
      {
        text: '확인',
        onPress: () => { () => { Linking.openURL(`tel:` + SAMPLE_DEATAIL_DATA.phoneNumber.substring(0, 8)) } }
      },
      {
        text: '취소',
      }
    ]
  )
}

const Test_2_Screen = ({ latitude, longtitude, name }) => {

  const [text, onChangeText] = useState('리뷰를 적어주세요 ...');
  const [number, onChangeNumber] = useState(3);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9db" }}>
      <Text style={styles.nameText}>{SAMPLE_DEATAIL_DATA.agencyname}</Text>
      <Text style={styles.addressText}>{SAMPLE_DEATAIL_DATA.address}</Text>
      <View style={styles.lightUnderLine}></View>
      <View style={styles.contentView}>
        <Text style={styles.contentTitle}>위치 :</Text><Text style={styles.contentText}>{SAMPLE_DEATAIL_DATA.location}</Text>
      </View>
      <View style={styles.lightUnderLine}></View>
      <View style={styles.contentView}>
        <Text style={styles.contentTitle}>연락처 :</Text>
        <TouchableOpacity onPress={() => { telAlert() }} style={{ paddingLeft: 150 }}>
          <Text style={styles.contentText}>{SAMPLE_DEATAIL_DATA.phoneNumber}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lightUnderLine}></View>
      <View style={styles.contentView}>
        <Text style={styles.contentTitle}>대상 :</Text><Text style={styles.contentText}>{SAMPLE_DEATAIL_DATA.target}</Text>
      </View>
      <View style={styles.lightUnderLine}></View>
      <View style={styles.contentView}>
        <Text style={styles.contentTitle}>아빠이용 :</Text><Text style={styles.contentText}>{SAMPLE_DEATAIL_DATA.fatherUsage}</Text>
      </View>
      <View style={styles.lightUnderLine}></View>
      <View style={styles.contentView}>
        <Text style={styles.contentTitle}>평점 :</Text><Text style={styles.contentText}>{SAMPLE_DEATAIL_DATA.target}</Text>
      </View>
      <View style={styles.lightUnderLine}></View>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        editable
        numberOfLines={4}
        maxLength={50}
      />
      <View style={styles.numberView}>
        <View style={{flexDirection:'column-reverse'}}>
          <Text style={{fontSize: 60}}>평점:</Text>
        </View>
        <TextInput
          style={styles.numberInput}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
        <View style={{flexDirection:'column-reverse'}}>
          <Text style={{fontSize: 60}}>/ 5</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.formButton}>
        <Text style={styles.formText}>제출하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  formButton: {
    borderWidth : 1,
    borderColor : 'black',
    backgroundColor : '#ced4da',
    marginHorizontal : 130,
    marginTop : 20,
    paddingVertical : 10,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10
  },
  formText: {
    fontSize: 30
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  contentText: {
    fontSize: 23
  },
  contentTitle: {
    fontSize: 23,
    color: 'black',
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  addressText: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 10,
    marginBottom: 20
  },
  lightUnderLine: {
    backgroundColor: '#ced4da',
    height: 1,
    marginHorizontal: 10
  },
  contentText: {
    fontSize: 23
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
  numberInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
  numberView: {
    flexDirection: 'row',
    justifyContent:'center'
  }
});

export default Test_2_Screen;