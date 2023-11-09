import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Label,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

const TestText = ({ name, goo, number, address, locate }) => {
  return (
    <View>
      <TouchableOpacity style={styles.contentButton}>
        <View style={styles.topView}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.topRightView}>
            <Text style={styles.gooText}>{goo}</Text>
            <Text style={styles.numberText}>{number}</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.addressText}>{address}</Text>
          <Text style={styles.locateText}>{locate}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.lightUnderLine}></View>
    </View>
  )
}

const Second_Screen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}><Text style={styles.headerText}>수유실 리스트</Text></View>
      <Searchbar
        placeholder="Search"
      />
      {/* 현재 Sample Data Test 중으로 ScrollView 사용 -> Current Data 사용시 FlatList 구현 예정 */}
      <ScrollView style={{ backgroundColor: "#fff9db" }}>
        <TestText
          name={"기관명(ex)"}
          goo={"시군구(ex)"}
          number={"연락처(ex)"}
          address={"주소(ex)"}
          locate={"위치(ex)"}></TestText>
        <TestText
          name={"홈플러스해운대점"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 해운대해변로 140"}
          locate={"1층"}></TestText>
        <TestText
          name={"국민건강보험공단해운대지사"}
          goo={"해운대구"}
          number={"051-749-8115"}
          address={"부산 해운대구 해운대로349번길 13"}
          locate={"2층"}></TestText>
        <TestText
          name={"롯데백화점센텀시티점"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 센텀남대로 59"}
          locate={"	6층 유아휴게실"}></TestText>
        <TestText
          name={"반송보건지소"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"	부산 해운대구 반송로 853"}
          locate={"1층"}></TestText>
        <TestText
          name={"벡스코제1전시장"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 APEC로 55"}
          locate={"제1전시장 1층"}></TestText>
        <TestText
          name={"	부산교통공사동백역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 해운대로 지하 522 (우동, 부산지하철 동백역)"}
          locate={"고객센터 내"}></TestText>
        <TestText
          name={"	부산교통공사반여농산물시장역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 반송로 917"}
          locate={"1층"}></TestText>
        <TestText
          name={"부산교통공사벡스코역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 반송로 550"}
          locate={"1층"}></TestText>
        <TestText
          name={"부산교통공사석대역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 해운대로 지하 396 (우동, 부산지하철 시립미술관역)"}
          locate={"1층"}></TestText>
        <TestText
          name={"부산교통공사센텀시티역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"부산 해운대구 석대천로 121"}
          locate={"1층"}></TestText>
        <TestText
          name={"부산교통공사영산대역"}
          goo={"해운대구"}
          number={"051-714-8701"}
          address={"	부산 해운대구 센텀남대로 50 (우동, 센템임페리얼타워빌딩)"}
          locate={"1층"}></TestText>
      </ScrollView>
    </SafeAreaView >

  )
}
const styles = StyleSheet.create({
  contentButton: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  header: {
    height: 60,
    justifyContent: 'center'
  },
  headerText: {
    marginLeft: 15,
    fontSize: 24,
    color: 'black',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topRightView: {
    alignItems: 'flex-end'
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 20
  },
  lightUnderLine: {
    backgroundColor: '#ced4da',
    height: 1,
    marginHorizontal: 10
  },


});

export default Second_Screen;