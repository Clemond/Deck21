import { View } from "react-native";
import CustomButton from "./CustomButton";

export default function CustomMenuForm() {
  return (
    <View className="border p-10 rounded-3xl bg-yellow-400 justify-center items-center ml-16 mr-16">
      <CustomButton
        title="Start Game"
        buttonFunction={() => console.log("Pressed Start Game")}
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
