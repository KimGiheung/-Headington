import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../bottom/Home_Screen"
import SecondScreen from "../bottom/Second_Screen"
import ThirdScreen from "../bottom/Third_Screen"
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Test_Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff9db" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Second') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Third') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={'black'} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false, tabBarLabel:"메인", tabBarLabelStyle:"font-size:10",
            
          }} />
        <Tab.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{ headerShown: false, title: '전체' }} />
        <Tab.Screen 
          name="Third" 
          component={ThirdScreen} 
          options={{ headerShown: false, title: '설정' }} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});

export default Test_Screen;