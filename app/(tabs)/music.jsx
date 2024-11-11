import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

const Music = () => {
  return (
    <View className="flex-1 bg-green-600">
      <ImageBackground 
        source={require('../../assets/images/nature.jpg')} 
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} 
      >
        {/* Dark overlay to enhance contrast */}
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />

        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          {/* Music Album Cover */}
          <View className="bg-white mt-4 rounded-2xl shadow-lg" style={{ height: 340, width: 340, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
              source={require('../../assets/images/nature.jpg')} 
              style={{ height: 320, width: 320, borderRadius: 10, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
              imageStyle={{ borderRadius: 20 }}
            >
              <Image source={require('../../assets/images/music.png')} className="absolute" style={{ resizeMode: 'contain' }} />
              <Image source={require('../../assets/images/title.png')} className="absolute bottom-0 left-0 ml-5 mb-5" style={{ resizeMode: 'contain' }} />
            </ImageBackground>    
          </View>     

          {/* Song Info */}
          <View className="bg-green-200 rounded-xl mt-5 flex-row items-center shadow-md" style={{ height: 80, width: 340 }}>
            <Image source={require('../../assets/images/nature.jpg')} style={{ resizeMode: 'cover', height: 70, width: 70, borderRadius: 10, marginLeft: 10 }} />
            <Text className="ml-4 mr-20 text-lg font-g_bold text-gray-900" style={{ flex: 1 }}>Birds Chirping in the Forest</Text>
          </View>

          {/* Progress Bar */}
          <Image source={require('../../assets/images/liee.png')} className="mt-3" style={{ resizeMode: 'contain', width: 340, height: 50 }} />

          {/* Controls */}
          <View className="flex-row justify-between items-center bg-gray-200 rounded-xl shadow-md mt-3" style={{ height: 70, width: 340 }}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/next.png')} className="w-10 h-10 rotate-180 ml-10" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/play.png')} className="w-12 h-12" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/next.png')} className="w-10 h-10 mr-10" />
            </TouchableOpacity>
          </View>

          {/* Additional Music Boxes */}
          {/** First Additional Music Box **/}
          <View className="bg-yellow-200 mt-4 rounded-2xl shadow-lg" style={{ height: 100, width: 340, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/images/waves.jpg')} style={{ height: 80, width: 80, borderRadius: 10, marginLeft: 10 }} />
            <Text className="ml-4 text-lg font-g_bold text-gray-900">Sound of Wave</Text>
          </View>

          {/** Second Additional Music Box **/}
          <View className="bg-gray-400 mt-4 rounded-2xl shadow-lg" style={{ height: 100, width: 340, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/images/night.jpg')} style={{ height: 80, width: 80, borderRadius: 10, marginLeft: 10 }} />
            <Text className="ml-4 text-lg font-g_bold text-gray-900">Rhythm of a Silent Night</Text>
          </View>

          {/** Third Additional Music Box **/}
          <View className="bg-yellow-700 mt-4 rounded-2xl shadow-lg" style={{ height: 100, width: 340, flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/images/chirp.jpg')} style={{ height: 80, width: 80, borderRadius: 10, marginLeft: 10 }} />
            <Text className="ml-4 text-lg font-g_bold text-gray-900">Calming Guitar Tunes</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Music;
