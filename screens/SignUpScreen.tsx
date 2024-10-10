import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { LockClosedIcon, UserIcon } from 'react-native-heroicons/solid/'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    const [Idenifiant, setIdenifiant] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState<boolean>(false);
    const navigation = useNavigation();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const toggleShowConfirmedPassword = () => {
        setShowConfirmedPassword(!showPassword);
    };
  return (
    <SafeAreaView>
        <View  className='flex flex-col space-y-6 h-screen p-8'>
            <View>
                <Text className='text-5xl font-semibold text-wrap w-[210px]'>Create an account</Text>
            </View>
            {/* username input */}
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
                    {/* password input */}
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
                </View>
                <View className=''>
                    {/* password confirmation input */}
                    <View className='flex flex-row items-center space-x-2 p-4 border border-[#A8A8A9] rounded-lg bg-gray-200 mb-2'>
                        <LockClosedIcon size={25} color='#626262'/>
                        <TextInput 
                            secureTextEntry={!showConfirmedPassword}
                            value={confirmedPassword}
                            onChangeText={setConfirmedPassword}
                            placeholder='Confirm Password'
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
                </View>
                <View className='w-[70%]'>
                    <Text>
                        By clicking the <Text className="text-red-500">Register</Text> button, you agree to the public offer
                    </Text>
                </View>
                <View>
                    {/* create account button */}
                    <TouchableOpacity
                    className='bg-[#F83758] items-center p-4 rounded-lg mt-8'
                    >
                        <Text className='text-white text-2xl font-semibold'>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* other sign up methods */}
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
                    <Text className='text-[#575757]'>I Already Have an Account</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text className='text-[#F83758] font-semibold underline underline-offset-2'>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;