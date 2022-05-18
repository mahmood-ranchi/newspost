import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/SearchLocation";
import NotificationScreen from "../screens/Notification";
import ProfileScreen from "../screens/Profile";
import NewsFeedScreen from "../screens/NewsFeed";

import { FontAwesome5 } from "@expo/vector-icons";
import plus from "../assets/plus.png";
import logo from "../assets/logo1.png";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...style.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#e32f45',
    }}>
      {children}
    </View>
  </TouchableOpacity>

)

export default class Tabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          showLabel: false,

          styles: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            marginHorizontal: 20,
            // shadow...
            shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centering Tab Button...
                  position: "absolute",
                  top: "25%",
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "red" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centering Tab Button...
                  position: "absolute",
                  top: "25%",
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "red" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Post"
          component={NewsFeedScreen}

          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centering Tab Button...
                  position: "absolute",
                  top: "20%",
                }}
              >
                <FontAwesome5
                  name="plus-circle"
                  size={25}
                  color={focused ? "red" : "grey"}
                ></FontAwesome5>
              </View>
            ),
            
          }}
        >
        </Tab.Screen>

        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centering Tab Button...
                  position: "absolute",
                  top: "25%",
                }}
              >
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? "red" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centering Tab Button...
                  position: "absolute",
                  top: "25%",
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "red" : "grey"}
                ></FontAwesome5>
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
}
