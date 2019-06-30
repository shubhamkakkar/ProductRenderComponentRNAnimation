import React from "react";
import { View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        left: 0,
        width: "100%"
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 30,
          justifyContent: "center"
        }}
      >
        <Text>Header Text || Child</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "20%",
          height: 80
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#F63C64",
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderBottomLeftRadius: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Menu
          </Text>
        </View>
      </View>
    </View>
  );
}
