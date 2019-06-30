import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Animated
} from "react-native";
import { Headers, Footer } from "./src/components";

interface IState {
  footerOpen: boolean;
}

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const AfooterHeightMax = SCREEN_HEIGHT * 0.75;
export default class App extends React.PureComponent<{}, IState> {
  state = {
    footerOpen: false
  };

  componentWillMount() {
    this.AfooterHeight = new Animated.Value(60);
  }

  openFooterAnimation() {
    Animated.parallel([
      Animated.spring(this.AfooterHeight, {
        toValue: AfooterHeightMax
      })
    ]).start();
  }

  closeFooterAnimation() {
    Animated.parallel([
      Animated.spring(this.AfooterHeight, {
        toValue: 60
      })
    ]).start();
  }

  animateFooter(): void {
    const { footerOpen } = this.state;
    if (footerOpen) {
      this.setState({ footerOpen: false });
      this.closeFooterAnimation();
    } else {
      this.setState({ footerOpen: true });
      this.openFooterAnimation();
    }
  }

  render() {
    const interpolateColorOuter = this.AfooterHeight.interpolate({
      inputRange: [0, AfooterHeightMax],
      outputRange: ["rgb(246,60,100)", "rgb(107,51,202)"]
    });

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
          <StatusBar />
          <ScrollView
            style={{
              flex: 1
            }}
            contentContainerStyle={{
              flexGrow: 1
            }}
          >
            <Headers />
          </ScrollView>
          <Animated.View
            style={{
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
