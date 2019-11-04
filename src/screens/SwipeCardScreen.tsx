import React from "react";
import { StyleSheet, View, Animated, StatusBar } from "react-native";
import Terminal from "../../src/components/Terminal";
import Card from "../../src/components/Card";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";

const SWIPE_DURATION_ANIMATION = 250;

type Props = {
  navigation: NavigationScreenProp<SwipeCardScreen>;
};

export default class SwipeCardScreen extends React.Component<Props> {
  state = {
    animation1: new Animated.Value(0),
    animation2: new Animated.Value(0),
    animation3: new Animated.Value(0)
  };

  swipeAnimation = val =>
    Animated.timing(this.state.animation1, {
      toValue: val,
      duration: SWIPE_DURATION_ANIMATION
    });

  componentDidMount() {
    Animated.sequence([
      this.swipeAnimation(0.5),
      this.swipeAnimation(1),
      this.swipeAnimation(0.5),
      this.swipeAnimation(0),
      this.swipeAnimation(0.5),
      this.swipeAnimation(1),
      this.swipeAnimation(0.5),
      this.swipeAnimation(0),
      this.swipeAnimation(0.5),
      this.swipeAnimation(1)
    ]).start(() => {
      Animated.sequence([
        this.swipeAnimation(5),
        Animated.timing(this.state.animation2, {
          toValue: 1,
          duration: 300
        }),
        Animated.timing(this.state.animation3, {
          toValue: 1,
          duration: 500
        }),
        Animated.delay(500)
      ]).start(() => {
        this.props.navigation.navigate("CardDetailsScreen");
      });
    });
  }

  render() {
    const cardInterpolation = this.state.animation1.interpolate({
      inputRange: [0, 1],
      outputRange: [180, 380]
    });

    const terminalInterpolation = this.state.animation1.interpolate({
      inputRange: [0, 1, 5],
      outputRange: [200, 200, -400]
    });

    const textInterpolation = this.state.animation1.interpolate({
      inputRange: [0, 1, 5],
      outputRange: [1, 0, 0]
    });

    const handRotateInterpolation = this.state.animation2.interpolate({
      inputRange: [0, 1],
      outputRange: ["-90deg", "0deg"],
      extrapolate: "clamp"
    });

    const priceOpacityInterpolation = this.state.animation3.interpolate({
      inputRange: [0, 0.8],
      outputRange: [0, 1]
    });

    const priceFontSizeOpacity = this.state.animation3.interpolate({
      inputRange: [0, 0.8],
      outputRange: [15, 35]
    });

    const successOpacityInterpolation = this.state.animation3.interpolate({
      inputRange: [0.2, 1],
      outputRange: [0, 1]
    });

    const successFontSizeOpacity = this.state.animation3.interpolate({
      inputRange: [0.2, 1],
      outputRange: [5, 25]
    });

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <Animated.View
            style={[
              styles.card,
              { transform: [{ rotate: "270deg" }], top: cardInterpolation }
            ]}
          >
            <Card />
          </Animated.View>
          <Animated.View
            style={[styles.terminal, { top: terminalInterpolation }]}
          >
            <Terminal />
          </Animated.View>
        </View>

        <Animated.Text
          style={[
            {
              color: "white",
              marginBottom: 100,
              fontSize: 25
            },
            { opacity: textInterpolation }
          ]}
        >
          Swiping card ...
        </Animated.Text>

        <Animated.View
          style={{
            alignSelf: "center",
            position: "absolute",
            opacity: this.state.animation2,
            transform: [{ rotate: handRotateInterpolation }]
          }}
        >
          <Icon name="hand-peace-o" size={100} color="yellow" />
        </Animated.View>

        <Animated.Text
          style={[
            styles.text,
            {
              bottom: 150,
              marginTop: 0,
              fontSize: priceFontSizeOpacity,
              opacity: priceOpacityInterpolation
            }
          ]}
        >
          $59
        </Animated.Text>
        <Animated.Text
          style={[
            styles.text,
            {
              bottom: 100,
              marginTop: 30,
              fontSize: successFontSizeOpacity,
              opacity: successOpacityInterpolation
            }
          ]}
        >
          Transferred Successfully
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(16,91,248)",
    alignItems: "center",
    justifyContent: "center"
  },
  terminal: {
    position: "absolute",
    top: 200
  },
  card: {
    position: "absolute",
    left: -25
  },
  text: {
    position: "absolute",
    flex: 1,
    color: "white",
    textAlign: "center"
  }
});
