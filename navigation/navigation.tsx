import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/MenuScreen";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
}
