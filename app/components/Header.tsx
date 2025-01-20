import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#f7287b",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  headerText: { color: "black", fontSize: 18 },
});
