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
    outerColor: string,
    innerColor: string
}

interface IState {
    footerOpen: boolean;
}

const {height: SCREEN_HEIGHT} = Dimensions.get("window");

const AfooterHeightMax: number = SCREEN_HEIGHT * 0.75;

const hexToRgb = (hex: any) =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , (m: number, r: number, g: number, b: number) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map((x: string) => parseInt(x, 16));

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
            children,
        } = this.props;

        let {
            outerColor,
            innerColor
        } = this.props

        if (outerColor.startsWith("#")) {
            outerColor =  "rgb(" + hexToRgb(outerColor).join(",") + ")";
        }
        if (innerColor.startsWith("#")) {
            innerColor =  "rgb(" +  hexToRgb(innerColor) + ")";
        }

        // @ts-ignore
        const interpolateColorOuter = this.AfooterHeight.interpolate({
            inputRange: [0, AfooterHeightMax],
            outputRange: [outerColor, innerColor]
        });
        // @ts-ignore
        const interpolateColorInner = this.AfooterHeight.interpolate({
            inputRange: [0, AfooterHeightMax],
            outputRange: [innerColor, outerColor]
        });

        const animatedStyleOuter = {
            backgroundColor: interpolateColorOuter
        };

        const animatedStyleInner = {
            backgroundColor: interpolateColorInner
        };


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
