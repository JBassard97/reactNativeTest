// app/home.tsx
import React, { useEffect } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import usePageTitle from "./hooks/usePageTitle";

export default function HomeScreen() {
  usePageTitle("Home - My App");

  return (
    <ScrollView>
      <Text>Welcome to the Home Screen!</Text>
    </ScrollView>
  );
}
