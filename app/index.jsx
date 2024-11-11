import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-700">
      <StatusBar style="auto" />

      {/* App Name */}
      <Text className="text-white text-4xl font-studdy_buddy mt-12 mb-2">Study Buddy</Text>

      {/* App Logo */}
      <Image
        source={require('../assets/images/applogo.png')}
        className="w-48 h-48 mt-4"
        resizeMode="contain"
      />

      {/* App Description */}
      <Text className="text-gray-200 text-center px-8 text-xl font-g_bold mt-6">
        The perfect companion to boost your study sessions. Plan, learn, and grow efficiently with your Study Buddy.
      </Text>

      {/* Tagline */}
      

      <View className="mt-12 items-center">
        {/* Start Learning Button */}
        <Link href="/auth/logins" asChild>
          <TouchableOpacity className="mt-10 bg-white py-3 px-8 rounded-full shadow-lg shadow-black">
            <Text className="text-green-700 text-xl font-studdy_buddy">Start Learning</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <Text className="text-gray-200 text-center px-8 text-sm font-g_thin mt-12">
        The smart way to study better, together.
      </Text>
    </View>
  );
}
