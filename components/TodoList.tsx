import { View, Text, Button, FlatList, TextInput } from "react-native";
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <View>
      <TextInput
        testID="taskInput"
        value={task}
        onChangeText={setTask}
        placeholder="New Task"
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        testID="todoList"
        data={todos}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
