import { View, Text, Switch } from "react-native";
import React, { useState } from "react";

export default function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View>
      <Switch testID="switch" value={isEnabled} onValueChange={setIsEnabled} />
      <Text testID="status">{isEnabled ? "On" : "Off"}</Text>
    </View>
  );
}
