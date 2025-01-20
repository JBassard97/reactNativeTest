import React from "react";
import { Text, View, Image, ScrollView, TextInput } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Even More Text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}
