import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { LockClosedIcon, UserIcon } from 'react-native-heroicons/solid/'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [Idenifiant, setIdenifiant] = useState<string>('');
    
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <SafeAreaView>
        <View  className='flex flex-col space-y-16 h-screen p-8'>
            <View>
                <Text className='text-5xl font-semibold font-mono text-wrap w-[210px]'>Welcome Back!</Text>
            </View>
            <View className='flex flex-col gap-6'>
                <View className='flex flex-row items-center space-x-2 p-4 border border-[#A8A8A9] rounded-lg bg-gray-200 '>
                    <UserIcon size={25} color='#626262'/>
                    <TextInput 
                        onChangeText={setIdenifiant}
                        placeholder='Username or Email'
                        placeholderTextColor="#676767" 
                        className='text-lg'
                    />
                </View>
                <View className=''>
                    <View className='flex flex-row items-center space-x-2 p-4 border border-[#A8A8A9] rounded-lg bg-gray-200 mb-2'>
                        <LockClosedIcon size={25} color='#626262'/>
                        <TextInput 
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Password'
                            placeholderTextColor="#676767" 
                            className='text-lg flex-1 '
                        />
                        <MaterialCommunityIcons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={26}
                            color="black"
                            onPress={toggleShowPassword}
                        />
                    </View>
                    <TouchableOpacity className="w-full">
                        <Text className="text-[#F83758] text-lg self-end">Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    className='bg-[#F83758] items-center p-4 rounded-lg mt-8'
                    >
                        <Text className='text-white text-2xl font-semibold'>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='items-center space-y-4 flex flex-col m'>
                <Text>- OR Continue with -</Text>
                <View className='flex flex-row gap-4'>
                    <TouchableOpacity
                        className='p-4 bg-[#FCF3F6] border border-[#F83758] rounded-full w-[110px] items-center'
                    >
                        <Image 
                            source={require('../assets/images/google-icon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        className='p-4 bg-[#FCF3F6] border border-[#F83758] rounded-full w-[110px] items-center'
                    >
                        <Image 
                            source={require('../assets/images/apple-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    className='flex flex-row gap-2'    
                >
                    <Text className='text-[#575757]'>Create An Account</Text>
                    <TouchableOpacity>
                        <Text className='text-[#F83758] font-semibold underline underline-offset-2'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen