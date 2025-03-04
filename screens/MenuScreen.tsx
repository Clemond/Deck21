import { ImageBackground, View, Text } from "react-native";
import CustomMenuForm from "../components/menu/CustomMenuForm";

export default function MenuScreen() {
  const backgroundImage = require("../assets/black-jack-app-bg.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="flex-1"
    >
      <View className="items-center mt-20 ">
        <Text className="text-white text-[100px] font-thin">Deck21</Text>
      </View>

      <View className=" flex-1 absolute inset-0 justify-center items-center">
        <CustomMenuForm />
      </View>
    </ImageBackground>
  );
}
