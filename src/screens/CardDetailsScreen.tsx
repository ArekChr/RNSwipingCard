import React, { PureComponent } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import Card from "../components/Card";
import { TextInput } from "react-native-gesture-handler";

export default class CardDetailsScreen extends PureComponent {
  componentDidMount() {
    this._input.focus();
  }

  componentWillUnmount() {
    this._input.blur();
  }

  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgb(242,247,254)" }
        ]}
      >
        <View
          style={{
            width: 2000,
            height: 2000,
            backgroundColor: "rgb(16,109,255)",
            borderRadius: 1500,
            position: "absolute",
            top: -1870,
            left: -850
          }}
        />
        <Text
          style={{
            height: 100,
            marginTop: 50,
            color: "white",
            fontSize: 25,
            textAlign: "center"
          }}
        >
          Enter card Details
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            padding: 20
          }}
        >
          <Card
            max={true}
            style={{
              elevation: 5,
              shadowOpacity: 0.3,
              shadowRadius: 3,
              shadowOffset: {
                height: 0,
                width: 0
              }
            }}
          />
        </View>
        <TextInput
          ref={input => (this._input = input)}
          keyboardType="number-pad"
        />
      </View>
    );
  }
}
