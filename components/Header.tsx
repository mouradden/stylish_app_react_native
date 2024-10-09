import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='flex-row justify-between items-center p-4'>
      {/* Menu Icon Button */}
      <TouchableOpacity className='w-14 h-14 items-center justify-center bg-gray-200 rounded-full'>
        <Image
          source={require('../assets/images/menu_icon.png')}
          className='w-12 h-12 ' 
        />
      </TouchableOpacity>
      {/* Stylish Icon Button */}
      <TouchableOpacity className='bg-[#f2f2f2] items-center justify-center'>
        <Image
          source={require('../assets/images/stylish_icon.png')}
          className='w-32 h-9' 
        />
      </TouchableOpacity>
      {/* Profile Image Button */}
      <TouchableOpacity className='w-20 h-20 bg-[#f2f2f2] items-center justify-center'>
        <Image
          source={require('../assets/images/profile_image.jpeg')}
          className='w-14 h-14 rounded-full' // Same size as others
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header