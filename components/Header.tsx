import { View, TouchableOpacity, Image, Modal, Text, SafeAreaView } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };
  return (
    <View className='flex-row justify-between items-center p-4'>
      {/* Menu Icon Button */}
      <TouchableOpacity 
        onPress={toggleMenu}
        className='w-14 h-14 items-center justify-center bg-gray-200 rounded-full'>
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
      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
      >
          <View className='flex-1 bg-black bg-opacity-50 justify-center items-center pt-24'>
            <View className='w-full h-full bg-white p-6 rounded-t-lg'>
              <Text className='text-3xl font-bold font-bold mb-4'>Menu</Text>
              <TouchableOpacity 
                className=' p-4 '
                onPress={() => { navigation.navigate('Login'); toggleMenu(); }}>
                <Text className='text-xl font-bold text-blue-600 mb-4'>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className=' p-4 '
                onPress={() => { navigation.navigate('SignUp'); toggleMenu(); }}>
                <Text className='text-xl font-bold text-blue-600'>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className=' p-4 '
                onPress={toggleMenu} className='mt-6'>
                <Text className='text-lg text-red-600'>Close Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </View>
  )
}

export default Header