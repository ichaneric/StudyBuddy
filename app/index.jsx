import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/custombutton';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-green-700 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-screen px-4">
          {/* Title */}
          <Text className="text-3xl text-white font-g_bold mb-6">
            Study Buddy
          </Text>

          {/* Center Image */}
          <Image
            source={images.logo}
            className="w-[200px] h-[200px] mb-6"
            resizeMode="contain"
          />

          {/* Description Text */}
          <Text className="text-base text-white text-center px-6 mb-6 font-g_regular">
            The perfect companion to boost your study sessions. Plan, learn, and grow efficiently with your Study Buddy.
          </Text>

          {/* Start Learning Button */}
          <Link href="/auth/logins" asChild>
          <TouchableOpacity className="mt-10 bg-white py-3 px-8 rounded-full shadow-lg shadow-black">
            <Text className="text-green-700 text-xl font-studdy_buddy">Start Learning</Text>
          </TouchableOpacity>
        </Link>

          {/* Footer Text */}
          <Text className="text-sm text-white text-center mt-4 font-g_thin">
            The smart way to study better, together.
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#006400" style="light" />
    </SafeAreaView>
  );
}
