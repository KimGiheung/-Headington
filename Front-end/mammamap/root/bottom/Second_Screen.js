import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const Second_Screen = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 위치 정보 요청 권한을 확인합니다.
    Geolocation.requestAuthorization();

    // 위치 정보를 받아옵니다.
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        setError(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      {latitude && longitude ? (
        <Text>
          현재 위치: {latitude}, {longitude}
        </Text>
      ) : (
        <Text>위치 정보를 가져올 수 없습니다.</Text>
      )}
      {error && <Text>오류: {error}</Text>}
    </View>
  );

}

const styles = StyleSheet.create({
});

export default Second_Screen;