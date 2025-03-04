import { View, TouchableOpacity, Text } from "react-native";
import GradientColor from "../color/GradleColor";

export default function GameBarMenu({
  hit,
  gameOver,
  stand,
  startGame
}: {
  hit: () => void;
  gameOver: boolean;
  stand: () => void;
  startGame: () => void;
}) {
  return (
    <View className="rounded-3xl overflow-hidden">
      <GradientColor>
        <View className="flex-row justify-evenly items-center h-16">
          <TouchableOpacity onPress={hit} disabled={gameOver}>
            <Text
              className={`text-xl font-bold  w-24 text-center p-2 rounded-3xl shadow-md ${
                gameOver ? "text-black/30" : "text-black"
              }`}
            >
              Hit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stand} disabled={gameOver}>
            <Text
              className={`text-xl font-bold  w-24 text-center p-2 rounded-3xl shadow-md ${
                gameOver ? "text-black/30" : "text-black"
              }`}
            >
              Stand
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={startGame}>
            <Text className="text-xl font-bold  w-24 text-center p-2 rounded-3xl shadow-md ">
              Restart
            </Text>
          </TouchableOpacity>
        </View>
      </GradientColor>
    </View>
  );
}
