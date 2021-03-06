import React, {useState, useEffect} from 'react';
import {
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Camera} from 'expo-camera';
import * as Shake from 'expo-shake';

//Lamps
import darkLamp from './assets/icons/eco-light-off.png';
import lightLamp from './assets/icons/eco-light.png';
//Logos
import lightLogo from './assets/icons/logo-dio.png';
import darkLogo from './assets/icons/logo-dio-white.png';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    /*
    //Desmonta o componente antigo e monta o novo
    Alert.alert('Atualizou o componente: ' + toggle);
    return () => Alert.alert('Desmontou o componente.');
    */
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [/*toggle*/]);

  useEffect(() => {
    Shake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    //Chamar quando componente for desmontado
    return () => {
      Shake.removeSubscription(() => {});
    }
  }, []);

  if(hasPermission === false) {
    return () => Alert.alert('Access denied.');
  }
  
  //console.log('Toggle: ' + toggle);
  //console.log('FLASH: ' + flash);
  //console.log('Has permission: ' + hasPermission);

  return (
    <View style={toggle ? style.lightContainer : style.darkContainer}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={toggle ? lightLamp : darkLamp}
        />
        <Image
          style={style.logo}
          source={toggle ? lightLogo: darkLogo}
        />
        {(hasPermission && toggle) && (
          <Camera 
            style={{height: 1, width: 1, opacity: 0}} 
            type={Camera.Constants.Type.back} 
            flashMode={Camera.Constants.FlashMode.torch}>
          </Camera>
        )}
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightOn: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 250,
    height: 350,
  },

  lightOff: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 250,
    height: 350,
    tintColor: 'white',
  },

  logo: {
    resizeMode: 'contain',
    alignItems: 'center',
    width: 250,
    height: 150,
  },
});