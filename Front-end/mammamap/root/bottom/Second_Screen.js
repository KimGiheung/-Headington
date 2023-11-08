import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';


const Second_Screen = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome!</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" />
      </View>
      <Text>Latitude: </Text>
      <Text>Longitude: </Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
});

export default Second_Screen;