//import {StatusBar} from 'expo-status-bar';
import {
  View, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

//Lamps
import darkLamp from './assets/icons/eco-light-off.png';
import lightLamp from './assets/icons/eco-light.png';
//Logos
import lightLogo from './assets/icons/logo-dio.png';
import darkLogo from './assets/icons/logo-dio-white.png';



export default function App() {
  const toggle = true;

  return (
    <View style={toggle ? style.lightContainer : style.darkContainer}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={toggle ? lightLamp: darkLamp}
        />
        <Image
          style={style.logo}
          source={toggle ? lightLogo: darkLogo}
        />
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