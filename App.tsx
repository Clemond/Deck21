import { View } from "react-native";
import "./global.css";
import RootStack from "./navigation/navigation";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black"
  }
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <NavigationContainer theme={MyTheme}>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}
