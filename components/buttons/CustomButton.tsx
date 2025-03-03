import { TouchableOpacity, View, Text } from "react-native";
import GradientColor from "../color/GradleColor";

export default function CustomButton({
  title,
  buttonFunction
}: {
  title: string;
  buttonFunction: () => void;
}) {
  return (
    <View className=" overflow-hidden rounded-3xl border  m-2 shadow-2xl">
      <GradientColor
        colors={["#186235", "#0b2f19"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity
          className="p-5  h-18 w-60 justify-center items-center  shadow-2xl"
          onPress={buttonFunction}
        >
          <Text className="text-white text-lg">{title}</Text>
        </TouchableOpacity>
      </GradientColor>
    </View>
  );
}
