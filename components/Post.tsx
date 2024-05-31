import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Post() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((json) => setPosts(json))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        // <ActivityIndicator
        //   role="progressbar"
        //   size={"large"}
        //   color={"blue"}
        //   style={{ alignItems: "center", justifyContent: "center" }}
        // />
        <Text testID="loading">Loading...</Text>
      ) : posts.length >= 1 ? (
        <FlatList
        testID="post-list"
          data={posts}
          renderItem={({ item }) => (
            <View style={{gap: 10, borderWidth: StyleSheet.hairlineWidth, padding: 5}}>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>There are no posts</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 40
  },
});
