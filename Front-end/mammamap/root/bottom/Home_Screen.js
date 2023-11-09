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
  latitude : 35.116315938499866,
  longitude : 128.967294753387,
  name : '테스트수유실입니다.'
};

const Home_Screen = ({ navigation }) => {
  // useEffect (() => {
  //   async function fetchMyAPI() {
  //     await fetch(
  //       'http://'
  //     )
  //   }
  //   fetchMyAPI()
  // }, [])
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
          coordinate={{ latitude: SAMPLE_DATA.latitude, longitude: SAMPLE_DATA.longitude, name: SAMPLE_DATA.name }}
          title="수유~실"
          description="눌러서 상세보기"
          pinColor={"yellow"}
          onPress={() => {
            navigation.navigate('test2', {latitude: SAMPLE_DATA.latitude, longitude: SAMPLE_DATA.longitude})
          }}
        />
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Home_Screen;