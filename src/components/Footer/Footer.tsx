import React from "react";
import {View, Text, TouchableWithoutFeedback, Animated} from "react-native";

interface IFooter {
    onPress: () => void;
    animatedStyleOuter: {};
    animatedStyleInner: {};
    footerComponent: React.ReactNode;
    footerWrapperStye: {}

    //FooterView

}

export default function Footer({
                                   onPress,
                                   animatedStyleOuter,
                                   animatedStyleInner,
                                   footerComponent,
                                   footerWrapperStye,

                               }: IFooter) {

    return (
        <>
            <View
                style={[{
                    flex: 1,
                    justifyContent: "center",
                }, ]}
            >
                {
                    footerComponent
                }
                <View
                    style={[{
                        justifyContent: "center",
                        alignItems: "center"
                    }, footerWrapperStye]}
                >
                    <TouchableWithoutFeedback {...{onPress}}>
                        <Animated.View
                            style={[
                                {
                                    height: 20,
                                    width: 20,
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: 20
                                },
                                animatedStyleOuter
                            ]}
                        >
                            <Animated.View
                                style={[
                                    {
                                        height: 10,
                                        width: 10,
                                        borderRadius: 5
                                    },
                                    animatedStyleInner
                                ]}
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    );
}
