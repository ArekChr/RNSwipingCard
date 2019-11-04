import React from "react";
import { View, StyleSheet } from "react-native";

const Terminal = () => {
  return (
    <View style={[styles.terminal]}>
      <View style={styles.display}>
        <View style={[styles.displayContent, { width: "50%" }]} />
        <View style={[styles.displayContent, { width: "70%" }]} />
        <View style={[styles.displayContent, { width: "80%" }]} />
        <View style={[styles.displayContent, { width: "50%" }]} />
      </View>
      <View style={[styles.row]}>
        <View style={[styles.button]} />
        <View style={[styles.button]} />
        <View style={[styles.button]} />
      </View>
      <View style={[styles.row]}>
        <View style={[styles.button]} />
        <View style={[styles.button]} />
        <View style={[styles.button]} />
      </View>
      <View style={[styles.row]}>
        <View style={[styles.button]} />
        <View style={[styles.button]} />
        <View style={[styles.button]} />
      </View>
      <View style={[styles.row]}>
        <View style={[styles.button, styles.green]} />
        <View style={[styles.button, styles.yellow]} />
        <View style={[styles.button, styles.red]} />
      </View>
      <View style={styles.bar} />
    </View>
  );
};

const styles = StyleSheet.create({
  terminal: {
    backgroundColor: "rgb(53,133,255)",
    borderRadius: 20,
    width: 200,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginRight: 100
  },
  display: {
    backgroundColor: "rgb(255,255,255)",
    width: 150,
    height: 90,
    borderRadius: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 7,
    width: 40,
    height: 30,
    margin: 5
  },
  row: {
    flexDirection: "row"
  },
  green: {
    backgroundColor: "rgb(91,196,100)"
  },
  red: {
    backgroundColor: "rgb(224,76,73)"
  },
  yellow: {
    backgroundColor: "rgb(252,193,72)"
  },
  bar: {
    position: "absolute",
    width: 20,
    height: 150,
    backgroundColor: "rgb(19,91,234)",
    right: -20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },
  displayContent: {
    backgroundColor: "rgb(205,216,227)",
    height: 10,
    borderRadius: 40,
    marginTop: 10,
    marginLeft: 10
  }
});

export default Terminal;
