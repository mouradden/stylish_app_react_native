import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HomeIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Cog6ToothIcon } from 'react-native-heroicons/outline/';
import { useNavigation, useNavigationState, NavigationState, Route } from '@react-navigation/native';

const useCurrentRouteName = (): string | undefined => {
  const routeName = useNavigationState((state: NavigationState) => {
      const routeIndex = state.index; // Get the current tab index
      let route: Route<string> | undefined = state.routes[routeIndex];

      // If it's a nested navigator, traverse down to get the actual route name
      while (route && route.state) {
          route = route.state.routes[route.state.index]; // Get the current nested route
      }

      return route?.name;
  });

  return routeName;
};
const NavBar = () => {
  const navigation = useNavigation();
  const currentRouteName = useCurrentRouteName();

  return (
      <View className='px-8 py-2 flex flex-row justify-between bg-white border-t-2 border-gray-200 mb-4'>
          <View className='flex-row space-x-8'>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('HomeTab')}
                  className='items-center space-y-1'>
                  <HomeIcon size={32} color={(currentRouteName === 'HomeTab'|| currentRouteName === 'Home') ? '#eb3030' : 'black'} />
                  <Text className={(currentRouteName === 'HomeTab'|| currentRouteName === 'Home') ? 'text-[#eb3030]' : 'text-black'}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Wishlist')}
                  className='items-center space-y-1'>
                  <HeartIcon size={32} color={currentRouteName === 'Wishlist' ? '#eb3030' : 'black'} />
                  <Text className={currentRouteName === 'Wishlist' ? 'text-[#eb3030]' : 'text-black'}>Wishlist</Text>
              </TouchableOpacity>
          </View>
          <View className='absolute left-1/2 bottom-4 rounded-full bg-white shadow-xl w-16 h-16 items-center justify-center pt-1'>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Basket')}
                  className='items-center space-y-1'>
                  <ShoppingCartIcon size={32} color={currentRouteName === 'Basket' ? '#eb3030' : 'black'} />
              </TouchableOpacity>
          </View>
          <View className='flex-row space-x-8'>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Search')}
                  className='items-center space-y-1'>
                  <MagnifyingGlassIcon size={32} color={currentRouteName === 'Search' ? '#eb3030' : 'black'} />
                  <Text className={currentRouteName === 'Search' ? 'text-[#eb3030]' : 'text-black'}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Setting')}
                  className='items-center space-y-1'>
                  <Cog6ToothIcon size={32} color={currentRouteName === 'Setting' ? '#eb3030' : 'black'} />
                  <Text className={currentRouteName === 'Setting' ? 'text-[#eb3030]' : 'text-black'}>Setting</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
};

export default NavBar;