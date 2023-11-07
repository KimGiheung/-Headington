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

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home_Screen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#fff9db"}}>
      <MapView style={{flex:1}} 
      provider={PROVIDER_GOOGLE} i
      initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Home_Screen;