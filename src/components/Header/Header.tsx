import React from "react";
import {View} from "react-native";
import {IProps} from "../../../type";
import {HeaderPropConsumer} from "../../context/headerContect/headerContext";

export default function Header() {
    return (
        <HeaderPropConsumer>
            {
                (
                    {
                        headerRight,
                        headerLeft,
                        widthOfRightHeader,
                        heightOfRightHeader,
                        headerWrapperStyle
                    }: IProps
                ) => (
                    <View
                        style={[{
                            justifyContent: "center",
                            width: "100%",
                            flexDirection: "row",
                        }, headerWrapperStyle]}
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
                )
            }
        </HeaderPropConsumer>
    );
}
