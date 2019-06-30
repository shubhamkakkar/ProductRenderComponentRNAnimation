import React from "react";
import {View, Text} from "react-native"
import SharedTransition from "./src/containers/SharedTransition/SharedTransition";

const HeaderLeft = () => (
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
        <Text>Header Left</Text>
    </View>
);

const HeaderRight = () => (
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
            HeaderRight
        </Text>
    </View>
);


export default function App() {
    return <SharedTransition
        headerRight={<HeaderRight/>}
        headerLeft={<HeaderLeft/>}
        widthOfRightHeader={"20%"}
        heightOfRightHeader={60}>

        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>
               PlaceYourBodyHere
            </Text>
        </View>


    </SharedTransition>;
}
