import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HomeIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Cog6ToothIcon } from 'react-native-heroicons/outline/';
import { useNavigation, useNavigationState, NavigationState, Route } from '@react-navigation/native';


// The returned value of this navigation hook is the name of the currently active route,
// which can be used to style my navigation UI especially the current tab.

const useCurrentRouteName = (): string | undefined => {
  const routeName = useNavigationState((state: NavigationState) => {
      const routeIndex = state.index;
      let route: Route<string> | undefined = state.routes[routeIndex];

      while (route && (route as any)?.state) {
        const nestedState = (route as any)?.state  as NavigationState;
        route = nestedState?.routes[nestedState.index];
      }

      return route?.name ?? 'Home';
  });

  return routeName;
};

const NavBar = () => {
  const navigation = useNavigation();
  const currentRouteName = useCurrentRouteName();

  return (
      <View className='px-8 py-2 flex flex-row justify-between bg-white border-t-2 border-gray-200 mb-4'>
          <View className='flex-row space-x-8'>
              {/* the Home button */}
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Home')}
                  className='items-center space-y-1'>
                  <HomeIcon size={32} color={(currentRouteName === 'Home') ? '#eb3030' : 'black'} />
                  <Text className={(currentRouteName === 'Home') ? 'text-[#eb3030]' : 'text-black'}>Home</Text>
              </TouchableOpacity>

              {/* the Wishlist button */}
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Wishlist')}
                  className='items-center space-y-1'>
                  <HeartIcon size={32} color={currentRouteName === 'Wishlist' ? '#eb3030' : 'black'} />
                  <Text className={currentRouteName === 'Wishlist' ? 'text-[#eb3030]' : 'text-black'}>Wishlist</Text>
              </TouchableOpacity>
          </View>

          {/* the Basket button */}
          <View className='absolute left-1/2 bottom-4 rounded-full bg-white shadow-xl w-16 h-16 items-center justify-center pt-1'>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Basket')}
                  className='items-center space-y-1'>
                  <ShoppingCartIcon size={32} color={currentRouteName === 'Basket' ? '#eb3030' : 'black'} />
              </TouchableOpacity>
          </View>
          
          <View className='flex-row space-x-8'>

            {/* the Basket button */}
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Search')}
                  className='items-center space-y-1'>
                  <MagnifyingGlassIcon size={32} color={currentRouteName === 'Search' ? '#eb3030' : 'black'} />
                  <Text className={currentRouteName === 'Search' ? 'text-[#eb3030]' : 'text-black'}>Search</Text>
              </TouchableOpacity>

              {/* the setting button */}
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