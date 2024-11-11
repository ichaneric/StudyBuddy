import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="flex-1 bg-green-700 p-5 justify-center items-center">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/applogo.png')}
          className="w-36 h-36 mb-5"
          style={{ resizeMode: 'contain' }}
        />
        <Text className="mb-5 text-2xl font-g_bold mr-52">Sign Up</Text>
        
        <View className="flex-row items-center bg-gray-300 rounded-lg p-3 w-4/5 mb-5 font-g_regular" style={{ width: 300 }}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Name"
            keyboardType="default"
          />
          <Image source={require('../../assets/images/user.png')} className="w-6 h-6 mr-3 opacity-60" />
        </View>

        <View className="flex-row items-center bg-gray-300 rounded-lg p-3 w-4/5 mb-5 font-g_regular" style={{ width: 300 }}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Email"
            keyboardType="email-address"
          />
          <Image source={require('../../assets/images/email.png')} className="w-6 h-6 mr-3 opacity-60" />
        </View>

        <View className="flex-row items-center bg-gray-300 rounded-lg p-3 w-4/5 mb-5" style={{ width: 300 }}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Gender"
          />
          <Image source={require('../../assets/images/gender.png')} className="w-6 h-6 mr-3 opacity-60" />
        </View>

        <View className="flex-row items-center bg-gray-300 rounded-lg p-3 w-4/5 mb-5" style={{ width: 300 }}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Birthdate (MM/DD/YYYY)"
            keyboardType="default"
          />
          <Image source={require('../../assets/images/bday.png')} className="w-6 h-6 mr-3 opacity-60" />
        </View>

        <View className="flex-row items-center bg-gray-300 rounded-lg p-3 w-4/5 mb-5" style={{ width: 300 }}>
          <TextInput
            className="flex-1 text-lg"
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={isPasswordVisible
                ? require('../../assets/icons/hiddeneye.png')
                : require('../../assets/icons/eye.png')}
              className="w-6 h-6 mr-3 opacity-60"
            />
          </TouchableOpacity>
        </View>

        <Text className="text-black un mb-2 font-g_thin">
          Already Have an Account? <Link href="/auth/logins"><Text className="underline"> Sign In </Text></Link>
        </Text>

        <Link href="/auth/logins" asChild>
          <TouchableOpacity className="bg-green-500 p-4 rounded-full w-4/5 items-center mb-5" style={{ width: 300 }}>
            <Text className="text-white text-lg font-g_bold">Register</Text>
          </TouchableOpacity>
        </Link>

        <View className="flex-row items-center justify-center w-4/5 mb-5">
          <View className="flex-1 h-px bg-black" />
          <Text className="mx-2 font-g_thin">or sign up with</Text>
          <View className="flex-1 h-px bg-black" />
        </View>

        <View className="w-4/5">
          <TouchableOpacity className="flex-row bg-white p-4 rounded-lg items-center mb-4">
            <Image source={require('../../assets/images/facebook.png')} className="w-6 h-6 mr-3" />
            <Text className="text-black text-lg font-g_thin">Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row bg-white p-4 rounded-lg items-center">
            <Image source={require('../../assets/images/google.png')} className="w-6 h-6 mr-3" />
            <Text className="text-black text-lg font-g_thin">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
