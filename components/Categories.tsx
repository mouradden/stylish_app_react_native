import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryType } from '../types';

const categoriesData: CategoryType[] = [
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

const Categories = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(()=>{
        setCategories(categoriesData); // at this stage, use categoriesData is sufficient but for more scalabality in the future, it will be mandatory
                                        // to use a state variable and get the data form the database using an API.
    }, []);
  return (
    <View className='flex flex-row space-x-4 px-4 pt-3'>
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
  )
}

export default Categories