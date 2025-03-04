import { ImageBackground, View, Text } from "react-native";
import InstructionsForm from "../components/menu/InstructionsForm";

export default function InstructionsScreen() {
  const backgroundImage = require("../assets/black-jack-app-bg.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="flex-1"
    >
      <View className=" w-full items-center mt-20 ">
        <Text className="text-white text-[100px] font-thin">Deck21</Text>
      </View>

      <View className="  justify-center items-center">
        <InstructionsForm />
      </View>
    </ImageBackground>
  );
}
