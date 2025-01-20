import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Persistent Header */}
      <Header />

      {/* Stack Navigation */}
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" options={{ title: "Home" }} />
          <Stack.Screen name="about" options={{ title: "About" }} />
        </Stack>
      </View>

      {/* Persistent Footer */}
      <Footer />
    </View>
  );
}
