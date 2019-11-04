import React from "react";

import { createAppContainer } from "react-navigation";

import SwipeCardScreen from "./src/screens/SwipeCardScreen";
import CardDetailsScreen from "./src/screens/CardDetailsScreen";

import { createStackNavigator } from "react-navigation-stack";

const AppNavigator = createStackNavigator(
  {
    SwipeCardScreen: {
      screen: SwipeCardScreen,
      navigationOptions: { header: null }
    },
    CardDetailsScreen: {
      screen: CardDetailsScreen,
      navigationOptions: { header: null }
    }
  },
  {}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
