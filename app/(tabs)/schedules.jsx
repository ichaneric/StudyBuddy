import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const Schedules = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { year: 'numeric', month: 'long' });
  };

  return (
    <ScrollView className="flex-1 bg-green-800 p-4">
      {/* Header with Profile Picture and Date */}
      <View className="flex-row justify-between items-center mb-4 mt-5">
        <Text className="text-white text-2xl font-bold">{formatDate(currentTime)}</Text>
        <Image source={require('../../assets/images/pfp.jpg')} className="w-12 h-12 rounded-full" />
      </View>

      {/* Smaller Real-time Clock */}
      <View className="mb-4">
        <Text className="text-white text-3xl font-bold text-center">{formatTime(currentTime)}</Text>
      </View>

      {/* Calendar Section with Background Image */}
      <View className="bg-green-700 rounded-lg p-4">
        <Image 
          source={require('../../assets/images/calendar.png')} 
          style={{ width: '100%', height: 300, borderRadius: 10 }} 
          resizeMode="contain" 
        />
      </View>

      {/* Today's Schedule */}
      <View className="bg-white rounded-lg mt-6 p-4 shadow-lg mb-10">
        <Text className="text-gray-900 font-bold text-lg mb-2">Today's Schedule</Text>

        {/* Schedule Items */}
        <View className="mb-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-gray-600">Class on Prof. EL</Text>
              <Text className="text-gray-400 text-sm">8:00 AM - 9:30 AM</Text>
            </View>
            <View className="bg-green-300 px-3 py-1 rounded-full">
              <Text className="text-white">Done</Text>
            </View>
          </View>
        </View>
        <View className="mb-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-gray-600">Presentation on Event Driven</Text>
              <Text className="text-gray-400 text-sm">9:30 AM - 11:00 AM</Text>
            </View>
            <View className="bg-yellow-300 px-3 py-1 rounded-full">
              <Text className="text-white">In Progress</Text>
            </View>
          </View>
        </View>

        <View className="mb-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-gray-600">App Development</Text>
              <Text className="text-gray-400 text-sm">11:00 AM - 12:30 PM</Text>
            </View>
            <View className="bg-yellow-300 px-3 py-1 rounded-full">
              <Text className="text-white">In Progress</Text>
            </View>
          </View>
        </View>
        <View className="mb-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-gray-600">Operating System</Text>
              <Text className="text-gray-400 text-sm">2:00 PM - 3:30 PM</Text>
            </View>
            <View className="bg-yellow-300 px-3 py-1 rounded-full">
              <Text className="text-white">In Progress</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity className="bg-yellow-500 p-4 w-12 justify-center items-center h-12 rounded-full absolute bottom-[-25] right-4 shadow-md">
          <Text className="text-white text-md">+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Schedules;
