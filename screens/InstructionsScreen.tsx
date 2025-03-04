import { ImageBackground, View, Text } from "react-native";

export default function InstructionsScreen() {
  const backgroundImage = require("../assets/black-jack-app-bg.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="h-screen"
    >
      <View>
        <Text>Hello world!</Text>
      </View>
    </ImageBackground>
  );
}
