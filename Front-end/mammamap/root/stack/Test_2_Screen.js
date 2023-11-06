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

const Test_2_Screen = ( {navigation} ) => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#fff9db"}}>
        <Text> Stack 2 test Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Test_2_Screen;