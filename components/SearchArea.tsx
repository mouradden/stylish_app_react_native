import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchArea = () => {
  return (
        <View className='bg-white rounded-lg flex-row items-center p-4 pace-x-2 ml-4 mt-5'>
          <Image
            source={require('../assets/images/search.png')}
            className='w-8 h-8'
          />
          <TextInput
            placeholder='Search any product'
            placeholderTextColor='#bbbbbb'
            className='text-xl flex-1 pb-1'
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/images/vocal.png')}
              className='w-8 h-8'
            />
          </TouchableOpacity>
        </View>
  )
}

export default SearchArea