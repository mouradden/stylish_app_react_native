import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DealCard = () => {
  return (
    <View className='flex flex-row items-center bg-[#4392f9] flex flex-row p-3 ml-4 mt-4 rounded-lg '>
        <View className='flex-1'>
          <Text className='text-white text-xl'>Deal of the Day</Text>
          <View className='flex flex-row items-center gap-2'>
            <Image
              source={require('../assets/images/clock.png')}
              className='w-[20px] h-[20px] rounded-full'
            />
            <Text className='text-white text-lg'>22h 55m 20s remaining </Text>
          </View>
        </View>
        <View >
            <TouchableOpacity className='flex flex-row items-center space-x-2 border border-white p-1 rounded-lg'>
                <Text className='text-white text-lg'>View all</Text>
                <Image
                    source={require('../assets/images/right_icon.png')}
                    className='w-[20px] h-[20px]'
                />
            </TouchableOpacity>
        </View>
      </View>
  )
}

export default DealCard