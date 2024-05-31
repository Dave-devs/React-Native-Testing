import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (email === "test@example.com" && password === "password") {
      setMessage("Login successful");
    } else {
      setMessage("Invalid credentials");
    }
  };

  return (
    <View>
      <TextInput testID="email" placeholder="Email" onChangeText={setEmail} />
      <TextInput
        testID="password"
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleSubmit} />
      {message ? <Text testID="message">{message}</Text> : null}
    </View>
  );
}