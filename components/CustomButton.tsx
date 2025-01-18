import { TouchableOpacity, View, Text } from "react-native";

export default function CustomButton({
  title,
  buttonFunction,
}: {
  title: string;
  buttonFunction: () => void;
}) {
  return (
    <View>
      <TouchableOpacity
        className="bg-green-900 p-5 rounded-3xl m-2 h-18 w-60 justify-center items-center border shadow-2xl"
        onPress={buttonFunction}
      >
        <Text className="text-white text-lg">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
