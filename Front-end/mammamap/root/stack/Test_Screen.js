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

import HomeScreen from "../bottom/Home_Screen"
import SecondScreen from "../bottom/Second_Screen"
import ThirdScreen from "../bottom/Third_Screen"
import FourthScreen from "../bottom/Fourth_Screen"


const Tab = createBottomTabNavigator();

const Test_Screen = ( {navigation} ) => {
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#fff9db"}}>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Second" component={SecondScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Third" component={ThirdScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Fourth" component={FourthScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Test_Screen;