import { View, Image } from "react-native";
import { ICard } from "../../types/ICard";

export default function Card({ item }: { item: ICard }) {
  return (
    <View className="p-1 mx-2 rounded-lg w-32 shadow-md">
      <Image
        source={{ uri: item.image }}
        className="flex-1"
        resizeMode="contain"
      />
    </View>
  );
}
