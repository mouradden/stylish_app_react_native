import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/outline/';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <View className='items-center'>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Home');
                }}
                className=" border rounded-full w-32 h-16 items-center pt-1 m-3 bg-yellow-300 shadow-xl transform rotate-12 hover:scale-110">
                <Text>back home</Text>
                <ArrowLeftIcon size={42} color='black' />
            </TouchableOpacity>
        <Text className='mt-32 text-xl'>this WishlistScreen</Text>
        </View>
    </SafeAreaView>
  )
}

export default WishlistScreen