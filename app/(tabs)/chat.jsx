import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';

const Chat = () => {
  return (
    <View className="flex-1 bg-gray-50 p-5">
      {/* Header */}
      <Text className="text-3xl font-g_bold text-gray-800 mb-4">Chats</Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white border border-gray-300 rounded-full p-2 mb-5 shadow-sm">
        <TextInput
          className="flex-1 text-lg font-g_thin"
          placeholder="Search"
          placeholderTextColor="gray"
          style={{ paddingLeft: 10 }}
        />
        <Image source={require('../../assets/images/search.png')} className="w-6 h-6 ml-2" />
      </View>

      {/* Chat List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Procoro Gonzaga</Text>
            <Text className="text-sm text-gray-500">No classes today</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Mikaela Lauren Concepcion Labajo</Text>
            <Text className="text-sm text-gray-500">I love you</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Bernard dela Cerna</Text>
            <Text className="text-sm text-gray-500">On the way nami ara te</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">John Micheal Olayvar</Text>
            <Text className="text-sm text-gray-500">yoho valo ta</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Fedelina Bayno</Text>
            <Text className="text-sm text-gray-500">attendanci ko dae</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Stephen Echaves</Text>
            <Text className="text-sm text-gray-500">valo chan</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Mike Aledo</Text>
            <Text className="text-sm text-gray-500">Valo vro</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Marion Magallon</Text>
            <Text className="text-sm text-gray-500">valo chanchan</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Ezekiel Capacite</Text>
            <Text className="text-sm text-gray-500">Sent a note.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Jurichris Sanchez</Text>
            <Text className="text-sm text-gray-500">Hatag answer ya</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Shunilat Concha</Text>
            <Text className="text-sm text-gray-500">Sent a flashcard.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Raiden Shogun</Text>
            <Text className="text-sm text-gray-500">Inazuma shines eternal!</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>

        <View className="flex-row items-center bg-white rounded-lg p-3 mb-3 shadow-sm">
          <Image source={require('../../assets/images/users.png')} className="w-12 h-12 mr-3 rounded-full" />
          <View className="flex-1">
            <Text className="text-lg font-g_regular text-gray-800">Yae Miko</Text>
            <Text className="text-sm text-gray-500">Nothing lasts forever.</Text>
          </View>
          <View className="w-3 h-3 bg-green-500 rounded-full"></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;
