import React from "react";
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Animated
} from "react-native";
import {Headers, Footer} from "../../components";

import {IProps} from "../../../type";

interface IState {
    footerOpen: boolean;
}

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");

const AfooterHeightMax: number = SCREEN_HEIGHT * 0.75;

export default class SharedTransition extends React.PureComponent<IProps, IState> {
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
           headerRight,
           headerLeft

       } = this.props;
        return (
            <SafeAreaView
                style={{
                    flex: 1
                }}
            >
                <ImageBackground
                    source={{
                        uri:
                            "https://cdn.dribbble.com/users/3363793/screenshots/6707177/6.29.jpg"
                    }}
                    // @ts-ignore
                    style={{
                        flex: 1,
                        width: null,
                        height: null
                    }}
                    imageStyle={{
                        resizeMode: "cover",
                        position: "absolute"
                    }}
                >
                    <ScrollView
                        style={{
                            flex: 1
                        }}
                        contentContainerStyle={{
                            flexGrow: 1
                        }}
                    >
                        <Headers {...{
                            headerRight,
                            headerLeft

                        }}  />
                    </ScrollView>
                    <Animated.View
                        style={{
                            // @ts-ignore
                            height: this.AfooterHeight
                        }}
                    >
                        <Footer
                            onPress={() => this.animateFooter()}
                            {...{
                                animatedStyleOuter,
                                animatedStyleInner
                            }}
                        />
                    </Animated.View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
