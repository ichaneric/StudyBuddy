import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const showAlert = () => {
  alert("Set Focus Mode: On");
};

const Homepage = () => {
  return (
    <View className="flex-1 p-4 bg-green-600">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Image source={require('../../assets/images/pfp.jpg')} className="w-10 h-10 rounded-full" />
        <Text className="text-lg font-g_regular text-white">Christian Sanchez</Text>
      </View>

      {/* Main Scroll */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <Text className="text-2xl font-g_bold text-white mb-4">Schedule</Text>

        {/* Schedule Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/jan.png')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/feb.png')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/mar.png')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/apr.png')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/may.png')} className="w-full h-full rounded-lg" />
          </View>
        </ScrollView>

        <Text className="text-2xl font-g_bold text-white mb-4">Subjects</Text>

        {/* Subjects Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6 h-52">
          <View className="flex-col items-center mr-4" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/ed.jpg')} className="w-full h-full rounded-lg" style={{ height: 182, width: 150 }} />
            <Text className="font-g_regular text-sm text-white mt-2">Event Driven</Text>
          </View>
          <View className="flex-col items-center mr-4" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/sia.jpg')} className="w-full h-full rounded-lg" style={{ height: 182, width: 150 }} />
            <Text className="font-g_regular text-sm text-white mt-2">System Architecture</Text>
          </View>
          <View className="flex-col items-center mr-4" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/sad.jpg')} className="w-full h-full rounded-lg" style={{ height: 182, width: 150 }} />
            <Text className="font-g_regular text-sm text-white mt-2">System Database</Text>
          </View>
          <View className="flex-col items-center mr-4" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/os.jpg')} className="w-full h-full rounded-lg" style={{ height: 182, width: 150 }} />
            <Text className="font-g_regular text-sm text-white mt-2">Operating System</Text>
          </View>
          <View className="flex-col items-center mr-4" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/rel.jpg')} className="w-full h-full rounded-lg" style={{ height: 182, width: 150 }} />
            <Text className="font-g_regular text-sm text-white mt-2">Religion</Text>
          </View>
        </ScrollView>

        <Text className="text-2xl font-g_bold text-white mb-4">Quick Quizzes and Flashcard Questions</Text>

        {/* Quick Quizzes */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash1.jpg')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash2.jpg')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash3.jpg')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash4.jpg')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash5.jpg')} className="w-full h-full rounded-lg" />
          </View>
          <View className="bg-gray-200 rounded-lg m-2 shadow-lg" style={{ height: 200, width: 150 }}>
            <Image source={require('../../assets/images/flash6.jpg')} className="w-full h-full rounded-lg" />
          </View>
        </ScrollView>

        {/* Focus Mode Button */}
        <TouchableOpacity onPress={showAlert} className="mt-4 mb-6 items-center justify-center flex-row" style={{ backgroundColor: 'gold', height: 50, borderRadius: 25 }}>
          <Text className="text-lg font-g_regular mr-2">Set Focus Mode</Text>
          <Image source={require('../../assets/images/history.png')} className="w-6 h-6" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Homepage;
