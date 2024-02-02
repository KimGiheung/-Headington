import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Marker } from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const SAMPLE_DATA = {
  latitude: 35.116315938499866,
  longitude: 128.967294753387,
  name: '테스트수유실입니다.'
};

const SAMPLE_DEATAIL_DATA_LIST = {
  value: {
    id: 1,
    sido: '부산',
    sigungu: '해운대구',
    agencyname: '홈플러스해운대점',
    address: '부산 해운대구 해운대해변로 140',
    location: '1층',
    phoneNumber: '051-714-8701',
    target: '외부인',
    fatherUsage: '가능'
  },
  value: {
    id: 1,
    sido: '부산',
    sigungu: '해운대구',
    agencyname: '홈플러스해운대점',
    address: '부산 해운대구 해운대해변로 140',
    location: '1층',
    phoneNumber: '051-714-8701',
    target: '외부인',
    fatherUsage: '가능'
  }
};

const Home_Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9db" }}>
      <Searchbar
        placeholder="Search"
      />
      <MapView style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 35.11631,
          longitude: 128.9672,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{ latitude: 35.10618422, longitude: 128.9662412, name: "부신교통공사하단역" }}
          title="부산교통공사하단역"
          description="눌러서 상세보기"
          pinColor={"red"}
          onPress={() => {
            navigation.navigate('test2', { name: "부신교통공사하단역" })
          }}
        />
        <Marker
          coordinate={{ latitude:	35.10681916, longitude: 128.9668740, name: "아트몰링부산점" }}
          title="아트몰링부산점"
          description="눌러서 상세보기"
          pinColor={"red"}
          onPress={() => {
            navigation.navigate('test2', { name: "아트몰링부산점" })
          }}
        />
        <Marker
          coordinate={{ latitude: 35.10349109, longitude: 128.9738545, name: "부산교통공사당리역" }}
          title="부산교통공사당리역"
          description="눌러서 상세보기"
          pinColor={"red"}
          onPress={() => {
            navigation.navigate('test2', {name: "부산교통공사당리역"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.10956000, longitude: 128.9428500, name: "부산광역시 현대미술관" }}
          title="부산광역시 현대미술관"
          description="눌러서 상세보기"
          pinColor={"red"}
          onPress={() => {
            navigation.navigate('test2', { name : "부산광역시 현대미술관" })
          }}
        />
        <Marker
          coordinate={{ latitude: 35.09215815, longitude: 128.9605919, name: "사하구제2청사" }}
          title="사하구제2청사"
          description="눌러서 상세보기"
          pinColor={"red"}
          onPress={() => {
            navigation.navigate('test2', { name : "사하구제2청사"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.09215815, longitude: 128.9605919, name: "부산교통공사신평역" }}
          title="부산교통공사신평역"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "부산교통공사신평역"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.08243474, longitude: 128.9782534, name: "홈플러스장림점" }}
          title="홈플러스장림점"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "홈플러스장림점"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.10250497, longitude: 128.9652983, name: "사하구건강가정지원센터공동육아나눔터" }}
          title="사하구건강가정지원센터공동육아나눔터"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "사하구건강가정지원센터공동육아나눔터"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.10450217, longitude: 128.9747879, name: "사하구청" }}
          title="사하구청"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "사하구청"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.09712033, longitude: 128.9623063, name: "탑마트신평점" }}
          title="탑마트신평점"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "탑마트신평점"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.08478117, longitude: 128.9723158, name: "롯데마트사하점" }}
          title="롯데마트사하점"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "롯데마트사하점"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.10349109, longitude: 128.9738545, name: "부산교통공사당리역" }}
          title="부산교통공사당리역"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name : "부산교통공사당리역"})
          }}
        />
        <Marker
          coordinate={{ latitude: 35.08975686, longitude: 128.9734497, name: "부산교통공사동매역" }}
          title="부산교통공사동매역"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', { name :"부산교통공사동매역"})
          }}/>
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Home_Screen;