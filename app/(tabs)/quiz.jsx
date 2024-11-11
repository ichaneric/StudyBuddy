import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Quiz = () => {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-lg font-g_bold text-black">Hi Christian,</Text>
        <Image source={require('../../assets/images/pfp.jpg')} className="w-10 h-10 rounded-full ml-4" />
      </View>
      <Text className="text-sm text-gray-500 mb-4">Great to see you again!</Text>

      {/* Achievements */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="bg-orange-200 p-3 rounded-lg flex-1 mr-2 items-center">
          <Image source={require('../../assets/images/star.png')} className="w-6 h-6 mb-1" />
          <Text className="text-xs text-gray-800">2300 Exp Points</Text>
        </View>
        <View className="bg-red-200 p-3 rounded-lg flex-1 ml-2 items-center">
          <Image source={require('../../assets/images/trophy.png')} className="w-6 h-6 mb-1" />
          <Text className="text-xs text-gray-800">32 Ranking</Text>
        </View>
      </View>

      {/* Daily Quiz */}
      <View className="bg-green-500 p-4 rounded-lg mb-6">
        <Text className="text-base font-g_regular text-white mb-1">Daily Quiz</Text>
        <Text className="text-sm text-white">20 mixed questions</Text>
      </View>

      {/* Continue Studying */}
      <Text className="text-base font-g_bold text-gray-800 mb-4">Continue Studying</Text>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Subjects */}
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">Event Driven Program...</Text>
          <Text className="text-sm text-gray-600">12 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">Religion</Text>
          <Text className="text-sm text-gray-600">6 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">System Database</Text>
          <Text className="text-sm text-gray-600">20 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">Religion</Text>
          <Text className="text-sm text-gray-600">6 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">Operating System</Text>
          <Text className="text-sm text-gray-600">25 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">Prof EL</Text>
          <Text className="text-sm text-gray-600">46 questions left</Text>
        </View>
        <View className="flex-row justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4">
          <Text className="text-base font-g_regular">System Architecture Inte..</Text>
          <Text className="text-sm text-gray-600">20 questions left</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Quiz;
