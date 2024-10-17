import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import WishlistScreen from '../../screens/screensForTesting/WishlistScreen';
import BasketScreen from '../../screens/screensForTesting/BasketScreen';
import SearchScreen from '../../screens/screensForTesting/SearchScreen';
import SettingScreen from '../../screens/screensForTesting/SettingScreen';
import NavBar from '../../components/NavBar';
import { useNavigation } from "expo-router";
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <Tab.Navigator
      tabBar={() => <NavBar />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Basket" component={BasketScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
