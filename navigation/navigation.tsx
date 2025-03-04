import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/MenuScreen";
import GameScreen from "../screens/GameScreen";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShown: true,
          headerTransparent: true,
          headerBackVisible: true
        }}
        name="Game"
        component={GameScreen}
      />
    </Stack.Navigator>
  );
}
