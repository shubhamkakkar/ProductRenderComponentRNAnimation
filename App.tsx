import React from "react";
import {View, Text} from "react-native"
import SharedTransition from "./src/containers/SharedTransition/SharedTransition";



const HeaderRight = () => (
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
)

const HeaderLeft = () => (
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
)


export default function App() {
  return <SharedTransition headerRight={<HeaderRight/>}  headerLeft={<HeaderLeft/>}   />;
}
