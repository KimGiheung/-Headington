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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home_Screen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#fff9db"}}>
        <Text> Main Screen 입니다.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("test2")}>
          <Text>Button to Detailes</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Home_Screen;