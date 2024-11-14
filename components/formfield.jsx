import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      {/* Label Text */}
      <Text className="text-lg text-gray-800 font-semibold">{title}</Text>

      {/* Input Container */}
      <View className="flex flex-row items-center h-[60px] px-4 rounded-lg bg-gray-100 border-2 border-gray-300 focus:border-blue-200 shadow-sm">
        {/* Text Input */}
        <TextInput
          className="flex-1 text-base text-gray-900 font-medium"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9B9B9B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {/* Password Toggle Icon */}
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.hiddeneye}
              className="w-6 h-6 opacity-70"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
