import { View, Text } from "react-native";
import React from "react";

interface ProfileProps {
  name: string;
  age: number;
}

export default function Profile({ name, age }: ProfileProps) {
  return (
    <View>
      <Text testID="name">Name: {name}</Text>
      <Text testID="age">Age: {age}</Text>
    </View>
  );
}
