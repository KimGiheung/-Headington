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
          coordinate={{ latitude: 35.116315938499866, longitude: 128.967294753387 }}
          title="수유~실"
          description="눌러서 상세보기"
          pinColor={"yellow"}
        />
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Home_Screen;