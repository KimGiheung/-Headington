import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Fourth_Screen = () => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#fff9db"}}>
        <Text> fourth Screen 입니다.</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Fourth_Screen;