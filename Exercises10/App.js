
import AppLoading from 'expo-app-loading';
import { useState, useEffect } from 'react';
import colors from './app/config/colors';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
//for Bungsag logger services
import logger from './app/utility/logger';
//for local notification
logger.start();
export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={(restoreUser)}
        onFinish={() => setAppIsReady(true)}
        onError={(error) => { ('error', error) }}
      />
    );
  }
  console.log('app.js');
  return (
    < AuthContext.Provider value={{ user, setUser }
    }>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider >
  );
}
/**
 *
 * //uri => handleAddImage(uri) for onAddImage
 *const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }
  }, [])
  NAVIGATION PROP
  initialRouteName="Tweets"

   options={{ title: 'Tweet Details' }} />
   tabBarIcon: ({ size }) size is base on navigation size it is automatically render
const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute' },
        tabBarActiveTintColor: 'tomato',
        headerShown: false
      }}>
      <Tab.Screen
        name='Feed'
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  )
  const StackNavigator = () => (
    //make globaly navigation
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        headerTintColor: "white",

      }}
    >
      <Stack.Screen
        name='Tweets'
        component={Tweets}
        options={{

        }} />
      <Stack.Screen
        name='TweetDetails'
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  )
   const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
     <Link />
    <Button title='View Tweet of Girish' onPress={() => navigation.navigate("TweetDetails", { id: 2, name: 'Girish' })} />
  </Screen>
);
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title='Click' onPress={() => navigation.navigate('TweetDetails')} />
  );
}
const TweetDetails = ({ route }) => (
  //useRoute() hook
  <Screen>
    <Text>TweetDetails page {route.params.id}</Text>
  </Screen>
);
const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
  <StackNavigator />
       <TabNavigator />
      <AuthNavigator />

      GET TOKEN AND RESTORE IT
        const restoreToken = async () => {
        const token = await authStorage.getToken();
        if (!token) return;
        const user = jwtDecode(token);
        setUser(user);
        }
      const restoreUser = async () => {
        const user = await authStorage.getUser();
      if (user) setUser(user);
      }

  };
  };
 */
//NETWORK
//Network status 
//import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
//import { NETWORK_ERROR } from 'apisauce';
//  NetInfo.fetch().then(netInfo => console.log(netInfo));
  //componentDidMount
  //const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));
  //componentWillUnmount
// <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//   {netInfo.isInternetReachable ? <View><Text>Internet connection is available</Text></View> : <View><Text>internet connection is NOT available</Text></View>}
// </View>
//LOGGER
//logger.log(new Error('Error in app'));