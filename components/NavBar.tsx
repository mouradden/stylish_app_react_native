import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, Cog6ToothIcon } from 'react-native-heroicons/outline/'
import { useNavigation, useRoute } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View className='px-8 py-2 pflex flex-row justify-between bg-white border-t-2 border-gray-200'>
      <View className='flex-row space-x-8'>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('Home');
            }}
            className='items-center space-y-1'>
            <HomeIcon size={32} color={route.name === 'Home' ? '#eb3030' : 'black' }/>
            <Text className={route.name === 'Home' ? 'text-[#eb3030]' : 'text-black'}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('Wishlist');
            }}
            className='items-center space-y-1'>
            <HeartIcon size={32} color={route.name === 'Wishlist' ? '#eb3030' : 'black' }/>
            <Text className={route.name === 'Wishlist' ? 'text-[#eb3030]' : 'text-black'}>Wishlist</Text>
        </TouchableOpacity>
      </View>
      <View className='absolute left-1/2 bottom-4 rounded-full bg-white shadow-xl  w-16 h-16 items-center justify-center pt-1'>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('Basket');
            }}
            className='items-center space-y-1'>
            <ShoppingCartIcon size={32} color={route.name === 'Basket' ? '#eb3030' : 'black' }/>
        </TouchableOpacity>
      </View>
      <View className='flex-row space-x-8'>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('Search');
            }}
            className='items-center space-y-1'>
            <MagnifyingGlassIcon size={32} color={route.name === 'Search' ? '#eb3030' : 'black' }/>
            <Text className={route.name === 'Search' ? 'text-[#eb3030]' : 'text-black'}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('Setting');
            }}
            className='items-center space-y-1'>
            <Cog6ToothIcon size={32} color={route.name === 'Setting' ? '#eb3030' : 'black' }/>
            <Text className={route.name === 'Setting' ? 'text-[#eb3030]' : 'text-black'}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NavBar