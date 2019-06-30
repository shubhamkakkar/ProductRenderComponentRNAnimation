import React from "react";
import {
    Dimensions,
    SafeAreaView,
    Animated,
    View, StyleSheet
} from "react-native";
import {Headers, Footer} from "../../components";

import {IProps} from "../../../type";


type TBackgroundColor = string | "white"

interface ISharedTransition extends IProps {
    backgroundColor?: TBackgroundColor
    children: React.ReactNode;
    footerComponent: React.ReactNode;
    footerWrapperStye: {}
}

interface IState {
    footerOpen: boolean;
}

const {height: SCREEN_HEIGHT} = Dimensions.get("window");

const AfooterHeightMax: number = SCREEN_HEIGHT * 0.75;

export default class SharedTransition extends React.PureComponent<ISharedTransition, IState> {
    state = {
        footerOpen: false
    };

    componentWillMount() {
        // @ts-ignore
        this.AfooterHeight = new Animated.Value(60);
    }

    openFooterAnimation() {
        Animated.parallel([
            // @ts-ignore
            Animated.spring(this.AfooterHeight, {
                toValue: AfooterHeightMax
            })
        ]).start();
    }

    closeFooterAnimation() {
        Animated.parallel([
            // @ts-ignore
            Animated.spring(this.AfooterHeight, {
                toValue: 60
            })
        ]).start();
    }

    animateFooter(): void {
        const {footerOpen} = this.state;
        if (footerOpen) {
            this.setState({footerOpen: false});
            this.closeFooterAnimation();
        } else {
            this.setState({footerOpen: true});
            this.openFooterAnimation();
        }
    }

    render() {
        // @ts-ignore
        const interpolateColorOuter = this.AfooterHeight.interpolate({
            inputRange: [0, AfooterHeightMax],
            outputRange: ["rgb(246,60,100)", "rgb(107,51,202)"]
        });
        // @ts-ignore
        const interpolateColorInner = this.AfooterHeight.interpolate({
            inputRange: [0, AfooterHeightMax],
            outputRange: ["rgb(107,51,202)", "rgb(246,60,100)"]
        });

        const animatedStyleOuter = {
            backgroundColor: interpolateColorOuter
        };

        const animatedStyleInner = {
            backgroundColor: interpolateColorInner
        };


        const {
            //IProps
            headerRight,
            headerLeft,
            widthOfRightHeader,
            heightOfRightHeader,
            footerComponent,
            footerWrapperStye,
            //ISharedTransition
            backgroundColor: wholeScreenBackgroundColor,
            children
        } = this.props;
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: wholeScreenBackgroundColor
                }}
            >
                <View style={{
                    // flex: 1,
                    position: "relative"
                }}>
                    <Headers {...{
                        headerRight,
                        headerLeft,
                        widthOfRightHeader,
                        heightOfRightHeader
                    }}  />
                </View>
                <View style={StyleSheet.absoluteFill}>
                    {children}
                </View>
                <Animated.View
                    style={{
                        // @ts-ignore
                        height: this.AfooterHeight,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%"
                    }}
                >
                    <Footer
                        onPress={() => this.animateFooter()}
                        {...{
                            animatedStyleOuter,
                            animatedStyleInner,
                            footerComponent,
                            footerWrapperStye
                        }}
                    />
                </Animated.View>
                {/*</ImageBackground>*/}
            </SafeAreaView>
        );
    }
}
