/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./root/bottom/Home_Screen"
import SecondScreen from "./root/bottom/Second_Screen"
import ThirdScreen from "./root/bottom/Third_Screen"
import FourthScreen from "./root/bottom/Fourth_Screen"
import TestScreen from "./root/stack/Test_Screen"
import Test2Screen from "./root/stack/Test_2_Screen"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1, backgroundColor : "pink"}}>
        <Stack.Navigator>
          <Stack.Screen name="test" component={TestScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="test2" component={Test2Screen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
