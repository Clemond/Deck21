import React from "react";
import { View, Text, ImageBackground } from "react-native";
import calculateHandValue from "../utils/calculateHandValue";
import Hand from "../components/cards/hand";
import GameBarMenu from "../components/game/GameBarMenu";
import UseBlackjack from "../hooks/useBlackjack";

export default function GameScreen() {
  const { stand, startGame, hit, playerHand, dealerHand, gameOver, message } =
    UseBlackjack();

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

        <Text className="text-lg text-white font-semibold mb-2">Your Hand</Text>
        <Hand playerHand={playerHand} />
        <Text className="text-lg text-white text-center mb-4">
          Your Points: {calculateHandValue(playerHand)}
        </Text>

        <Text className="text-lg text-white font-semibold mb-2">
          Dealer's Hand
        </Text>
        <Hand playerHand={dealerHand} />
        <Text className="text-lg text-white text-center mb-4">
          Dealer's Points: {calculateHandValue(dealerHand)}
        </Text>

        <GameBarMenu
          hit={hit}
          gameOver={gameOver}
          stand={stand}
          startGame={startGame}
        />

        <Text className="text-xl text-white font-bold text-center mt-4">
          {message}
        </Text>
      </View>
    </ImageBackground>
  );
}
