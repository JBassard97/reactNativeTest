// app/home.tsx
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { usePageTitle } from "./hooks/usePageTitle";
export default function HomeScreen() {
  usePageTitle("Home - My App");

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}
