import React from "react";
import {
    Dimensions,
    SafeAreaView,
    Animated,
    View, StyleSheet
} from "react-native";
import {Headers, Footer} from "../../components";

type TBackgroundColor = string | "white"

interface ISharedTransition {
    outerColor: string,
    innerColor: string,
    footerMinHeight:number,
    wholeScreenBackgroundColor?: TBackgroundColor
}

interface IState {
    footerOpen: boolean;
}

const {height: SCREEN_HEIGHT} = Dimensions.get("window");

const AfooterMinHeightMax: number = SCREEN_HEIGHT * 0.75;

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
        this.AfooterMinHeight = new Animated.Value(this.props.footerMinHeight);
    }

    openFooterAnimation() {
        Animated.parallel([
            // @ts-ignore
            Animated.spring(this.AfooterMinHeight, {
                toValue: AfooterMinHeightMax
            })
        ]).start();
    }

    closeFooterAnimation() {
        Animated.parallel([
            // @ts-ignore
            Animated.spring(this.AfooterMinHeight, {
                toValue: this.props.footerMinHeight
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
            children,
        } = this.props;

        let {
            outerColor,
            innerColor,
            wholeScreenBackgroundColor
        } = this.props

        if (outerColor.startsWith("#")) {
            outerColor =  "rgb(" + hexToRgb(outerColor).join(",") + ")";
        }
        if (innerColor.startsWith("#")) {
            innerColor =  "rgb(" +  hexToRgb(innerColor) + ")";
        }

        // @ts-ignore
        const interpolateColorOuter = this.AfooterMinHeight.interpolate({
            inputRange: [0, AfooterMinHeightMax],
            outputRange: [outerColor, innerColor]
        });
        // @ts-ignore
        const interpolateColorInner = this.AfooterMinHeight.interpolate({
            inputRange: [0, AfooterMinHeightMax],
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
                }}>
                    <Headers />
                </View>
                <View style={StyleSheet.absoluteFill}>
                    {children}
                </View>
                <Animated.View
                    style={{
                        // @ts-ignore
                        height: this.AfooterMinHeight,
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
                        }}
                    />
                </Animated.View>
            </SafeAreaView>
        );
    }
}
