import { View, Button } from "react-native";

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
    <View className="bg-white/20 flex-row justify-evenly items-center h-14 mb-4 rounded-3xl">
      <Button title="Hit" onPress={hit} disabled={gameOver} />
      <Button title="Stand" onPress={stand} disabled={gameOver} />
      <Button title="Restart" onPress={startGame} />
    </View>
  );
}
