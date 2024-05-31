import { View, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "@/components/LoginForm";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
