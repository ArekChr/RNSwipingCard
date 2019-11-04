import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Card = props => {
  const { max } = props;
  return (
    <View
      style={[
        styles.card,
        { position: "relative" },
        props.style ? props.style : null,
        max ? { height: 180 } : null
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            styles.productDetails,
            max ? { padding: 8, paddingTop: 12, paddingBottom: 12 } : null
          ]}
        >
          <Text style={[styles.text, max ? { fontSize: 17 } : null]}>
            Banana (4 PCS)
          </Text>
          <Text
            style={[styles.text, styles.price, max ? { fontSize: 17 } : null]}
          >
            -$20
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={[
              styles.circle,
              { right: 0 },
              max ? { width: 40, height: 40 } : null
            ]}
          ></View>
          <View
            style={[
              styles.circle,
              { backgroundColor: "rgb(224,76,73)", right: 15 },
              max ? { width: 40, height: 40, right: 20 } : null
            ]}
          ></View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-between",
          marginTop: 40,
          position: "relative"
        }}
      >
        <View style={{ marginRight: "auto" }}>
          <Text style={{ color: "gray" }}>Card number</Text>
          <Text style={[styles.number, max ? { fontSize: 17 } : null]}>
            4444 0000 3245 2491
          </Text>
        </View>
        <View>
          <Text style={{ color: "gray" }}>Date</Text>
          <Text style={[styles.number, max ? { fontSize: 17 } : null]}>
            10/2016
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15
  },
  text: {
    fontWeight: "bold"
  },
  price: {
    color: "rgb(224,76,73)",
    marginLeft: 10
  },
  productDetails: {
    flexDirection: "row",
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "gray",
    marginRight: "auto",
    padding: 4,
    paddingTop: 8,
    paddingBottom: 8
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "rgb(252,193,72)",
    borderRadius: 40,
    position: "absolute"
  },
  number: {
    fontWeight: "bold"
  }
});

export default Card;
