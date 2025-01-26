import { View } from "react-native";
import CustomButton from "./CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function CustomMenuForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="border p-10 rounded-3xl bg-yellow-500 justify-center items-center ml-16 mr-16">
      <CustomButton
        title="Start Game"
        buttonFunction={() => navigation.navigate("Home")}
      />
      <CustomButton
        title="Instructions"
        buttonFunction={() => console.log("Pressed Instructions")}
      />
      <CustomButton
        title="Settings"
        buttonFunction={() => console.log("Pressed Settings")}
      />
    </View>
  );
}
