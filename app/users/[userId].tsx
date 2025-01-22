import React from "react";
import { Text, View } from "react-native";
import useDynamicParam from "../hooks/useDynamicParam";
import useQueryParams from "../hooks/useQueryParams";

export default function UserProfile() {
  const userId = useDynamicParam(2);
  const queryParams = useQueryParams();
  console.log("Query Params: ", queryParams);

  return (
    <View>
      <Text>User ID: {userId}</Text>
      <Text>Query Params: {JSON.stringify(queryParams)}</Text>
    </View>
  );
}
