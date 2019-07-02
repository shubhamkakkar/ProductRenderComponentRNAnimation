import React from "react";
import {View, Text} from "react-native"
import SharedTransition from "./src/containers/SharedTransition/SharedTransition";

import {FooterPropProvider} from "./src/context/footerContext/footerContext"
import {HeaderPropProvider} from "./src/context/headerContect/headerContext";

//Header
const HeaderLeft = () => (
    <View
        style={{
            flex: 1,
            paddingVertical: 20,
            paddingHorizontal: 20,
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
const headerWrapperStyle = {
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
};
const widthOfRightHeader = "20%";
const heightOfRightHeader = 60;
// shareTS
const footerMinHeight=90;
const outerColor = "#fff";
const innerColor = "#000";

//footer
const footerBackgroundColor = {
    backgroundColor: "white",
};
const FooterComponent = () => (
    <View
        style={[{
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingHorizontal: 20,
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center"
        }, footerBackgroundColor]}
    >
        <Text>PlaceYourFooterBodyHere</Text>
    </View>
)

export default function App() {
    return (

        <FooterPropProvider value={{footerComponent: <FooterComponent/>, footerBackgroundColor}}>
            <HeaderPropProvider
                value={{
                    headerLeft: <HeaderLeft/>,
                    headerRight: <HeaderRight/>,
                    headerWrapperStyle,
                    widthOfRightHeader,
                    heightOfRightHeader,
                }}
            >
                <SharedTransition
                    {
                        ...{
                            footerMinHeight,
                            innerColor,
                            outerColor,
                        }
                    }

                >
                    <View style={[{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }]}>
                        <Text>
                            PlaceYourBodyHere
                        </Text>
                    </View>
                </SharedTransition>
            </HeaderPropProvider>
        </FooterPropProvider>

    );
}
