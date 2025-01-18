import { View, Text } from "react-native";
import "../global.css";
import { useState } from "react";
import { FlatList } from "react-native";
import { ICard } from "../types/ICard";
import { createDeck } from "../utils/createDeck";

export default function HomeScreen() {
  const [deck, setDeck] = useState<ICard[]>(createDeck());

  return (
    <View className=" flex-grow justify-center items-center my-24">
      <FlatList
        data={deck}
        keyExtractor={(item, index) => `${item.suit}-${item.value}-${index}`}
        renderItem={({ item }) => (
          <View className="p-5 border border-gray-300">
            <Text>
              {item.value} of {item.suit}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
