import { View } from "react-native";
import CustomButton from "../buttons/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import GradientColor from "../color/GradleColor";

export default function CustomMenuForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="rounded-3xl border border-white overflow-hidden">
      <GradientColor>
        <View className="p-10 justify-center items-center ">
          <CustomButton
            title="Start Game"
            buttonFunction={() => navigation.navigate("Game")}
          />
          <CustomButton
            title="Instructions"
            buttonFunction={() => navigation.navigate("Instructions")}
          />
          <CustomButton
            title="Settings"
            buttonFunction={() => console.log("Pressed Settings")}
          />
        </View>
      </GradientColor>
    </View>
  );
}
