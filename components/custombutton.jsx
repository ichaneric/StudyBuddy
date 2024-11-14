import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`bg-blue-600 rounded-full h-[56px] flex-row justify-center items-center ${containerStyles} ${isLoading ? 'opacity-70' : ''}`}
      disabled={isLoading}
    >
      {/* Button Text */}
      <Text className={`text-white font-semibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {/* Loading Indicator */}
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
