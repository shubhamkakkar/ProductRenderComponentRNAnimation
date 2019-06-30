import React from "react";
import {View} from "react-native";
import {IProps} from "../../../type";

export default function Header({headerRight, headerLeft, widthOfRightHeader, heightOfRightHeader}: IProps) {
    return (
        <View
            style={{
                justifyContent: "center",
                // position: "absolute",
                // left: 0,
                width: "100%",
                flexDirection: "row"
            }}
        >
            {headerLeft}
            <View
                style={{
                    width: widthOfRightHeader,
                    height: heightOfRightHeader
                }}
            >
                {headerRight}
            </View>
        </View>
    );
}
