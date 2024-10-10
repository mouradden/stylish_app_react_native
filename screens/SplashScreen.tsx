import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { splashType } from '../types';

const splahes: splashType[] = [
    {
        id: 1,
        title: 'Choose Products',
        picture: require('../assets/images/splash_choose_products.png'),
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
        id: 2,
        title: 'Make Payment',
        picture: require('../assets/images/splash_make_payment.png'),
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
        id: 3,
        title: 'Get Your Order',
        picture: require('../assets/images/splash_get_order.png'),
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
]

const SplashScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const navigation = useNavigation();

    // hold the splash image for 2 seconds 
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <SafeAreaView>
            {
                isLoading ?
            <View className='h-screen w-screen items-center justify-center'>
                <Image 
                    source={require('../assets/images/splash.png')}
                />
            </View>
            :
            <View key={splahes[currentPage].id} className='h-full bg-white'>
                <View className='flex flex-row p-4'>
                    <View className='flex-1'>
                        <Text className='text-2xl font-semibold'>
                            {splahes[currentPage].id}
                            <Text className='text-2xl  text-[#A0A0A0]'>/3</Text>
                        </Text>
                    </View>
                    <TouchableOpacity className=''
                        onPress={()=>{
                            navigation.navigate('Home');
                        }}
                    >
                        <Text className='text-2xl font-semibold'>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View className='items-center flex-1'>
                    <View className='items-center justify-center'>
                        <Image 
                            source={splahes[currentPage].picture}
                            className='w-80 h-80'
                        />
                    </View>
                    <View className='flex items-center justify-center px-16 space-y-4'> 
                        <Text className='text-3xl font-bold font-montserrat text-center'>
                            {splahes[currentPage].title}
                        </Text>
                        <Text className='text-lg text-semibold text-[#a8a8a9] text-center'>
                            {splahes[currentPage].description}
                        </Text>
                    </View>
                </View>

                <View className='flex flex-row p-6 justify-between items-center'>
                    {/* Prev Button */}
                    {
                        (splahes[currentPage].id === 2 || splahes[currentPage].id === 3) ? 
                        <TouchableOpacity
                            onPress={() => setCurrentPage((prev) => prev - 1)}
                        >
                            <Text className='text-[#c4c4c4] text-2xl font-semibold'>Prev</Text>
                        </TouchableOpacity>
                        :
                        <View className='w-[60px]' />
                    }

                    {/* Dots Indicator */}
                    <View className='flex flex-row items-center justify-center gap-1'>
                        {/* For splahes[currentPage].id 2 and 3 (center indicator) */}
                        {
                            (splahes[currentPage].id === 2 || splahes[currentPage].id === 3) && (
                                <View className='flex-row gap-1 items-center pb-1'>
                                    <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                                    {
                                        splahes[currentPage].id !== 2 && 
                                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                                    }
                                    
                                </View>
                            )
                        }
                            <View className="bg-black w-[40px] h-[8px] rounded-full " />
                        {/* For splahes[currentPage].id 1 and 2 (left indicator) */}
                        {
                            (splahes[currentPage].id === 1 || splahes[currentPage].id === 2) && (
                                <View className=' flex-row gap-1 items-center pb-1'>
                                    <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                                    {
                                        splahes[currentPage].id !== 2 && 
                                        <View className="bg-[#c4c4c4] w-[10px] h-[10px] rounded-full" />
                                    }
                                </View>
                            )
                        }
                    </View>

                    {/* Next Button */}
                    {
                        (splahes[currentPage].id === 1 || splahes[currentPage].id === 2) ? 
                        <TouchableOpacity
                            onPress={() => setCurrentPage((prev) => prev + 1)}
                        >
                            <Text className='text-[#f83758] text-2xl font-semibold'>Next</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('Home');
                            }}
                        >
                            <Text className='text-[#f83758] text-2xl font-semibold'>Get started</Text>
                        </TouchableOpacity>
                    }
                </View>

            </View>
        }
        </SafeAreaView>
    )
}

export default SplashScreen;
