import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { splashType } from '../types'
const SplashPage = ({id, title, picture, description} : splashType) => {
  return (
    <View key={id} className='h-full'>
      <View className='flex flex-row p-4'>
        <View className='flex-1'>
            <Text className='text-2xl font-semibold'>{id}<Text className='text-2xl text-[#A0A0A0]'>/3</Text></Text>
        </View>
        <TouchableOpacity className=''>
            <Text className='text-2xl font-semibold'>Skip</Text>
        </TouchableOpacity>
      </View>
      <View className='items-center flex-1'>
        <View className='items-center justify-center'>
            <Image 
                source={picture}
                className='w-80 h-80'
            />
        </View>
        <View className='flex items-center justify-center px-16 space-y-4'> 
            <Text className='text-3xl font-bold font-montserrat text-center'>{title}</Text>
            <Text className='text-lg text-semibold text-[#a8a8a9] text-center'>{description}</Text>
        </View>
      </View>
      <View className='flex flex-row p-6 justify-between items-center'>
        {/* Prev Button */}
        {
            (id === 2 || id === 3) ? 
            <TouchableOpacity>
                <Text className='text-[#c4c4c4] text-2xl font-semibold'>Prev</Text>
            </TouchableOpacity>
            :
            <View className='w-[60px]' />
        }

        {/* Dots Indicator */}
        <View className='flex flex-row items-center justify-center gap-4'>
            {/* For id 2 and 3 (center indicator) */}
            {
                (id === 2 || id === 3) && (
                    <>
                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                        <View className="bg-black w-[40px] h-[8px] rounded-full" />
                    </>
                )
            }

            {/* For id 1 and 2 (left indicator) */}
            {
                (id === 1 || id === 2) && (
                    <>
                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                    </>
                )
            }
        </View>

        {/* Next Button */}
        {
            (id === 1 || id === 2) ? 
            <TouchableOpacity>
                <Text className='text-[#f83758] text-2xl font-semibold'>Next</Text>
            </TouchableOpacity>
            :
            <View className='w-[60px]' /> 
        }
        </View>

    </View>
  )
}

export default SplashPage

