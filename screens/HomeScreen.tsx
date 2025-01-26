import { View, Text, TouchableOpacity } from "react-native";
import "../global.css";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ICard } from "../types/ICard";
import { createDeck } from "../utils/createDeck";

export default function HomeScreen() {
  const [deck, setDeck] = useState<ICard[]>([]);

  function handleGenerateDeck() {
    const newDeck = createDeck();
    setDeck(newDeck);
  }

  return (
    <View className=" flex-grow justify-center items-center my-24">
      <TouchableOpacity
        onPress={() => handleGenerateDeck()}
        className="bg-orange-500 p-5 rounded-2xl mb-5"
      >
        <Text>Press me to below to generate a deck of cards!</Text>
      </TouchableOpacity>

      {deck.length === 0 ? (
        <Text>No deck generated</Text>
      ) : (
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
      )}
    </View>
  );
}
