import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

const DealCard = () => {
    const initialTime = 22 * 60 * 60 + 55 * 60 + 20; // 22 hours, 55 minutes, 20 seconds in seconds
    const [remainingTime, setRemainingTime] = useState(initialTime);
  
    useEffect(() => {
      if (remainingTime > 0) {
        const timer = setInterval(() => {
          setRemainingTime(prevTime => prevTime - 1);
        }, 1000);
  
        return () => clearInterval(timer);
      }
    }, [remainingTime]);
  
    // Calculate hours, minutes, and seconds from the total remaining time
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
  
  return (
    <View className='flex flex-row items-center bg-[#4392f9] flex flex-row p-3 ml-4 mt-4 rounded-lg '>
        <View className='flex-1'>
          <Text className='text-white text-xl'>Deal of the Day</Text>
          <View className='flex flex-row items-center gap-2'>
            <Image
              source={require('../assets/images/clock.png')}
              className='w-[20px] h-[20px] rounded-full'
            />
            {/* dynamic count down */}
            <Text className='text-white text-lg'>{`${hours}h ${minutes}m ${seconds}s remaining`}
            </Text>
          </View>
        </View>
        <View >
          {/* button view all */}
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