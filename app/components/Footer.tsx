import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Link href="/">
        <Text style={styles.footerText}>Home</Text>
      </Link>
      <Link href="/about">
        <Text style={styles.footerText}>About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 50,
        backgroundColor: "#f7287b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footerText: { color: "black", fontSize: 18 },
});
