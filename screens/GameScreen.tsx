import React, { useState } from "react";
import { View, Text, FlatList, Button, ImageBackground } from "react-native";
import { createDeck } from "../utils/createDeck";
import calculateHandValue from "../utils/calculateHandValue";
import { ICard } from "../types/ICard";

export default function GameScreen() {
  const [deck, setDeck] = useState<ICard[]>(createDeck());
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const [dealerHand, setDealerHand] = useState<ICard[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  function startGame() {
    setPlayerHand([]);
    setDealerHand([]);
    const newDeck = createDeck();
    setDeck(newDeck);
    setGameOver(false);
    setMessage("");
  }

  const hit = () => {
    const newDeck = [...deck];
    const newCard = newDeck.pop()!;
    const newHand = [...playerHand, newCard];

    setPlayerHand(newHand);
    setDeck(newDeck);

    if (calculateHandValue(newHand) > 21) {
      setGameOver(true);
      setMessage("You busted! Dealer wins.");
    }
  };

  const stand = () => {
    let newDealerHand = [...dealerHand];
    while (calculateHandValue(newDealerHand) < 17) {
      newDealerHand.push(deck.pop()!);
    }

    setDealerHand(newDealerHand);
    checkWinner(newDealerHand);
  };

  const checkWinner = (dealerHand: ICard[]) => {
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
      setMessage("You win!");
    } else if (playerValue < dealerValue) {
      setMessage("Dealer wins!");
    } else {
      setMessage("It's a tie!");
    }

    setGameOver(true);
  };

  const renderCard = ({ item }: { item: ICard }) => (
    <View className="bg-white p-1 mx-2 rounded-lg w-32 shadow-md">
      <Text className="text-center font-semibold text-lg">
        {item.value} of {item.suit}
      </Text>
    </View>
  );
  const backgroundImage = require("../assets/black-jack-app-bg.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      className="h-screen"
    >
      <View className="flex-1  p-4">
        <Text className="text-2xl font-bold text-white text-center mb-4 mt-12">
          Blackjack Game
        </Text>

        {/* Player's Hand */}
        <Text className="text-lg text-white font-semibold mb-2">Your Hand</Text>
        <FlatList
          data={playerHand}
          renderItem={renderCard}
          keyExtractor={(item, index) => `${item.suit}-${item.value}-${index}`}
          horizontal
          className="mb-4"
        />
        <Text className="text-lg text-white text-center mb-4">
          Your Points: {calculateHandValue(playerHand)}
        </Text>

        {/* Dealer's Hand */}
        <Text className="text-lg text-white font-semibold mb-2">
          Dealer's Hand
        </Text>
        <FlatList
          data={dealerHand}
          renderItem={renderCard}
          keyExtractor={(item, index) => `${item.suit}-${item.value}-${index}`}
          horizontal
          className="mb-4"
        />
        <Text className="text-lg text-white text-center mb-4">
          Dealer's Points: {calculateHandValue(dealerHand)}
        </Text>

        {/* Buttons */}
        <View className="flex-row justify-between mb-4">
          <Button title="Hit" onPress={hit} disabled={gameOver} />
          <Button title="Stand" onPress={stand} disabled={gameOver} />
          <Button title="Restart" onPress={startGame} />
        </View>

        {/* Game Message */}
        <Text className="text-xl text-white font-bold text-center mt-4">
          {message}
        </Text>
      </View>
    </ImageBackground>
  );
}
