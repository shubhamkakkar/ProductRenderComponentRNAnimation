import React from "react";
import {View, Text} from "react-native";
import {IProps} from "../../../type";

export default function Header({headerRight,headerLeft}: IProps) {
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
            {headerRight}
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "20%",
                    height: 80
                }}
            >
                {
                    headerLeft
                }
            </View>
        </View>
    );
}
