import { View, Image, ActivityIndicator } from "react-native";
import { ICard } from "../../types/ICard";
import { useState } from "react";

export default function Card({ item }: { item: ICard }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <View className="p-1 mx-2 rounded-lg w-32 shadow-md">
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={"#fff"}
          className="flex-1 justify-end"
        />
      )}
      <Image
        source={{ uri: item.image }}
        className="flex-1"
        resizeMode="contain"
        onLoad={() => setIsLoading(false)}
      />
    </View>
  );
}
