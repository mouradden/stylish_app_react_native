import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { CategoryType } from '../types';
import OfferCards from '../components/OfferCards';
import DealCard from '../components/DealCard';
import NavBar from '../components/NavBar';

const categories: CategoryType[] = [
  {
    id: 1,
    title: 'Beauty',
    picture: require('../assets/images/beauty.jpeg'),
  },
  {
    id: 2,
    title: 'Fashion',
    picture: require('../assets/images/fashion.jpeg'),
  },
  {
    id: 3,
    title: 'Kids',
    picture: require('../assets/images/kids.jpeg'),
  },
  {
    id: 4,
    title: 'Mens',
    picture: require('../assets/images/mens.jpeg'),
  },
  {
    id: 5,
    title: 'Womens',
    picture: require('../assets/images/womens.jpeg'),
  },
];

const HomeScreen = () => {

  
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        {/* header */}
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
        <ScrollView className='flex-1'>
          <View className='px-4 flex-col gap-4'>
            {/* search part */}
            <View className='bg-white rounded-lg flex-row items-center p-3 space-x-2'>
              <Image
                source={require('../assets/images/search.png')}
                className='w-8 h-8' // Same size as others
              />
              <TextInput
                placeholder='Search any product'
                placeholderTextColor='#bbbbbb'
                className='text-xl flex-1 pb-1'
              />
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/vocal.png')}
                  className='w-8 h-8' // Same size as others
                />
              </TouchableOpacity>
            </View>
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
            <View className='flex flex-row space-x-4'>
              <FlatList
                data={categories}
                renderItem={({ item }: { item: CategoryType }) => (
                  <TouchableOpacity className='rounded-full flex flex-col pr-6'>
                    <Image
                      source={item.picture}
                      className='w-[60px] h-[60px] rounded-full'
                    />
                    <Text className='text-lg'>{item.title}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* card offers */}
            <OfferCards />

            {/* Deal of the day part */}
            <DealCard />
          </View>
        </ScrollView>

        {/* Nav Bar */}
        <View className='absolute bottom-0 left-0 right-0'>
          <NavBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
