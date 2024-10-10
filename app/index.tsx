import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import WishlistScreen from '../screens/screensForTesting/WishlistScreen';
import BasketScreen from '../screens/screensForTesting/BasketScreen';
import SearchScreen from '../screens/screensForTesting/SearchScreen';
import SettingScreen from '../screens/screensForTesting/SettingScreen';
import NavBar from '../components/NavBar';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator 
        tabBar={() => <NavBar />} // here i replace the default bar with my custom one.
        screenOptions={{headerShown: false}}
      >
          <Tab.Screen name="HomeTab" component={HomeScreen} />
          <Tab.Screen name="Wishlist" component={WishlistScreen} />
          <Tab.Screen name="Basket" component={BasketScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
  );
}
export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
