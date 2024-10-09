import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import OfferCards from '../components/OfferCards';
import DealCard from '../components/DealCard';
import NavBar from '../components/NavBar';
import Categories from '../components/Categories';
import Header from '../components/Header';
import SearchArea from '../components/SearchArea';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 '>
        {/* header */}
        <Header />
        <ScrollView className='flex-1'>
          <View className='px-4 flex-col gap-4'>
            {/* search part */}
            <SearchArea />
            {/* sort and filter section */}
            <View className='flex flex-row items-center'>
              <Text className='text-3xl font-semibold flex-1'>All Featured</Text>
              <View className='flex flex-row gap-4'>
                <TouchableOpacity className='bg-white p-2 rounded-lg flex flex-row items-center gap-1'>
                  <Text className='text-lg'>Sort</Text>
                  <Image
                    source={require('../assets/images/sort.png')}
                    className='w-[16px] h-[16px]' // Same size as others
                  />
                </TouchableOpacity>
                <TouchableOpacity className='bg-white p-2 rounded-lg flex flex-row items-center gap-1'>
                  <Text className='text-lg'>Filter</Text>
                  <Image
                    source={require('../assets/images/filter.png')}
                    className='w-[16px] h-[16px]' // Same size as others
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* categories */}
            <Categories />
            
            {/* card offers */}
            <OfferCards />

            {/* Deal of the day part */}
            <DealCard />

          </View>
        </ScrollView>

        {/* Nav Bar */}
        {/* <View className='absolute bottom-0 left-0 right-0'>
          <NavBar />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
