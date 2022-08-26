import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform
} from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // horizontal
        justifyContent: 'center', //main primary access
        alignItems: 'center', // secondary access

      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          //flexBasis: 100, //map width or height
          //flexGrow: 1,
          //flex: 1,
          // flexShrink: 1,
          width: 100,
          height: 100,

        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: 'absolute',
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100
        }}
      />

    </View>
  );
}
const containerStyle = { backgroundColor: "#ed89" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

// width: '100%',
// height: landscape ? '100%' : '30%'
// const { landscape } = useDeviceOrientation();
// console.log(useDeviceOrientation());