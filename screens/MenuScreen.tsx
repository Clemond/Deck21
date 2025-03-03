import { ImageBackground, View, Text } from "react-native";
import CustomMenuForm from "../components/menu/CustomMenuForm";

export default function MenuScreen() {
  const backgroundImage = require("../assets/black-jack-app-bg.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="h-screen"
    >
      <View className="absolute top-0 w-full items-center mt-32 ">
        <Text className="text-white text-9xl font-thin">Deck21</Text>
      </View>

      <View className="absolute inset-0 justify-center items-center">
        <CustomMenuForm />
      </View>
    </ImageBackground>
  );
}
