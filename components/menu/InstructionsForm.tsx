import { View, Text } from "react-native";
import GradientColor from "../color/GradleColor";

export default function InstructionsForm() {
  return (
    <View className="rounded-3xl border overflow-hidden mx-10">
      <GradientColor>
        <View className="p-8  rounded-3xl ">
          <Text className="font-bold text-xl mb-2 text-white">
            How to Play Blackjack
          </Text>
          <Text className="italic text-lg text-white">
            ⎔ Hit: Draw a card to get closer to 21.
          </Text>
          <Text className="italic text-lg text-white">
            ⎔ Stand: Keep your current hand and end your turn.
          </Text>
          <Text className="italic text-lg text-white">
            ⎔ Press Reset to start a new game.
          </Text>

          <Text className="italic text-lg text-white">
            ⎔ The goal is to have a hand value closer to 21 than the dealer
            without going over. The dealer must draw until they reach at least
            17. If your hand exceeds 21, you bust and lose the round.
          </Text>
        </View>
      </GradientColor>
    </View>
  );
}
