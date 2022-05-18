import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    );
  }
}
