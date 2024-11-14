import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/formfield';
import CustomButton from '../../components/custombutton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};

  return (
    <SafeAreaView className="bg-green-700 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          {/* Logo Image */}
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[150px] rounded-full bg-pink-200"
          />

          {/* Login Text */}
          <Text className="text-2xl text-black font-g_bold mt-6">Login</Text>

          {/* Email Input */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5 "
            keyboardType="email-address"
            iconRight="@"
          />

          {/* Password Input */}
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
            iconRight="eye"
            secureTextEntry
          />

          {/* Sign In Button */}
          <Link href="/homepage" asChild>
          <TouchableOpacity className="bg-green-600 p-4 rounded-full w-4/5 items-center mt-5" style={{ width: 300 }}>
            <Text className="text-white text-lg font-g_bold">Register</Text>
          </TouchableOpacity>
        </Link>

          {/* Sign Up Link */}
          <Link href="/homepage">
          
          </Link>
          <View className="flex justify-center pt-5 flex-row gap-2 ">
            <Text className="text-lg text-black font-g_regular">Don't have an account?</Text>
            <Link href="/auth/signup" className="text-lg font-g_regular text-white">
              Sign Up
            </Link>
          </View>


          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
