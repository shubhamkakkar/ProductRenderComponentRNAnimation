import React from "react";
import {View, TouchableWithoutFeedback, Animated, ScrollView} from "react-native";
import {
    FooterPropConsumer
} from "../../context/footerContext/footerContext"

interface IFooter {
    onPress: () => void;
    animatedStyleOuter: {};
    animatedStyleInner: {};
}


interface IFooterContext {
    footerComponent: React.ReactNode;
    footerBackgroundColor: {}
}

export default function Footer({
                                   onPress,
                                   animatedStyleOuter,
                                   animatedStyleInner,
                               }: IFooter) {

    return (
        <FooterPropConsumer>
            {
                ({
                     footerComponent,
                     footerBackgroundColor,

                 }: IFooterContext) => <View
                    style={[{
                        flex: 1,
                        justifyContent: "center",
                    },]}
                >
                    <ScrollView
                        style={{
                            flex: 1
                        }}
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                    >
                        {
                            footerComponent
                        }
                    </ScrollView>
                    <View
                        style={[{
                            justifyContent: "center",
                            alignItems: "center",
                        }, footerBackgroundColor]}
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
                                        marginVertical: 5
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
            }
        </FooterPropConsumer>
    );
}
