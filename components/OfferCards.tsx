import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent  } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { OfferCard } from '../types'
const { width } = Dimensions.get('window');
const cardsData: OfferCard[] = [
    {
      id: '1',
      title: '50-40% OFF',
      image: require('../assets/images/offre_card.jpeg'),
      description: [
        'Now in (product)',
        'All colors'
      ],
    },
    {
      id: '2',
      title: '50-60% OFF',
      image: require('../assets/images/offre_card.jpeg'),
      description: [
        'Now in (product)',
        'All colors'
      ],
    },
    {
      id: '3',
      title: '70-60% OFF',
      image: require('../assets/images/offre_card.jpeg'),
      description: [
        'Now in (product)',
        'All colors'
      ],
    },
];
const OfferCards = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cards, setCards] = useState<OfferCard[]>([]);
  const flatListRef = useRef<FlatList>(null);
  
  useEffect(() => {
    setCards(cardsData); // Set the cards based on the data, assuming `cardsData` is provided (for me maually, but in a real world case form the database using an API for example)
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width); // Calculate the current index based on scroll position
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = activeIndex + 1 >= cards.length ? 0 : activeIndex + 1; // Determine the next index, looping back to 0 if at the end
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex, cards.length]);
  return (
<View >
    <FlatList 
        ref={flatListRef}
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={{ paddingLeft: 14, marginRight: 16, marginTop: 16 }}>
                <View className=''>
                    <Image
                        source={item.image}
                        style={{ width: width -30 , height: 244, borderRadius: 20 }} 
                    />
                </View>
                <View className='absolute top-12 px-6 space-y-2'>
                    <Text className='text-white text-2xl font-bold'>{item.title}</Text>
                    {item.description.map((desc, index) => (
                        <Text key={index} className='text-white text-xl'>{desc}</Text>
                    ))}
                    <TouchableOpacity className='border border-white p-2 rounded-lg flex flex-row items-center'>
                        <Text className='text-white text-lg font-semibold flex-1'>Shop Now</Text>
                        <Image
                            source={require('../assets/images/right_icon.png')}
                            className='w-[24px] h-[24px]'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )}
        horizontal
        pagingEnabled
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
    />
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8 }}>
            {cards.map((card, index) => (
                <TouchableOpacity key={card.id}>
                    <View 
                        style={{
                            backgroundColor: activeIndex === index ? '#ffa3b3' : '#c4c4c4',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                        }} 
                    />
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default OfferCards