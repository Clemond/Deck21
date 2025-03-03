import { FlatList, View } from "react-native";
import Card from "./card";
import { ICard } from "../../types/ICard";

export default function Hand({ playerHand }: { playerHand: ICard[] }) {
  return (
    <View className="flex-1">
      <FlatList
        data={playerHand}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item, index) => `${item.suit}-${item.value}-${index}`}
        horizontal
        className="mb-4"
      />
    </View>
  );
}
