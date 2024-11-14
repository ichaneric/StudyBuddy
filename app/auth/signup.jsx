import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons } from '../../constants';
import CustomButton from '../../components/custombutton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    birthdate: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submit = () => {
    setIsSubmitting(true);
    // Add your form submission logic here
    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-green-700 h-full">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="w-full items-center px-4 py-5">
          {/* Logo */}
          <Image
            source={images.logo}
            className="w-32 h-32 rounded-full mb-5"
            resizeMode="cover"
          />

          {/* Sign Up Text */}
          <Text className="text-3xl text-black font-g_bold mb-5">Sign Up</Text>

          {/* Name Input */}
          <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
            <Image source={icons.user} className="w-6 h-6 mr-3" />
            <TextInput
              placeholder="Name"
              value={form.name}
              onChangeText={(text) => handleChange('name', text)}
              className="flex-1 text-lg font-g_regular"
            />
          </View>

          {/* Email Input */}
          <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
            <Image source={icons.email} className="w-6 h-6 mr-3" />
            <TextInput
              placeholder="Email"
              value={form.email}
              onChangeText={(text) => handleChange('email', text)}
              className="flex-1 text-lg font-g_regular"
              keyboardType="email-address"
            />
          </View>

          {/* Gender Input */}
          <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
            <Image source={icons.gender} className="w-6 h-6 mr-3" />
            <TextInput
              placeholder="Gender"
              value={form.gender}
              onChangeText={(text) => handleChange('gender', text)}
              className="flex-1 text-lg font-g_regular"
            />
          </View>

          {/* Birthdate Input */}
          <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
            <Image source={icons.calendar} className="w-6 h-6 mr-3" />
            <TextInput
              placeholder="Birthdate (MM/DD/YYYY)"
              value={form.birthdate}
              onChangeText={(text) => handleChange('birthdate', text)}
              className="flex-1 text-lg font-g_regular"
              keyboardType="default"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-gray-200 rounded-xl px-4 py-3 mb-4">
            <Image source={icons.eye} className="w-6 h-6 mr-3" />
            <TextInput
              placeholder="Password"
              value={form.password}
              onChangeText={(text) => handleChange('password', text)}
              className="flex-1 text-lg font-g_regular"
              secureTextEntry
            />
          </View>

          {/* Register Button */}
          <Link href="/auth/logins" asChild>
          <TouchableOpacity className="bg-green-800 p-4 rounded-full w-4/5 items-center mt-5" style={{ width: 300 }}>
            <Text className="text-white text-lg font-g_bold">Register</Text>
          </TouchableOpacity>
        </Link>

          {/* Sign In Link */}
          <View className="flex-row justify-center items-center mt-5">
            <Text className="text-lg text-black font-g_regular">Already Have an Account?</Text>
            <Link href="/auth/logins" className="text-lg text-white font-g_regular ml-2 underline ">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
