import React, { useEffect } from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import { usePageTitle } from "./hooks/usePageTitle";

export default function About() {
  usePageTitle("About - My App");

  return (
    <ScrollView>
      <Text>About page yayy</Text>
    </ScrollView>
  );
}
