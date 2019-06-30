import React from "react";
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";

interface IFooter {
  onPress: () => void;
  animatedStyleOuter: {};
  animatedStyleInner: {};
}

export default function Footer({
  onPress,
  animatedStyleOuter,
  animatedStyleInner
}: IFooter) {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          paddingBottom: 20,
          paddingHorizontal: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <Text>Footer</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end"
          }}
        >
          <TouchableWithoutFeedback {...{ onPress }}>
            <Animated.View
              style={[
                {
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center"
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
