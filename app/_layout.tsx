import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./components/Header";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
    </Stack>
  );
}
