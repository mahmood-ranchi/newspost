import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Dimensions, SafeAreaView  } from 'react-native';
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';
import plus from '../assets/plus.png';
import logo from '../assets/logo1.png'; 
import {NewsPost} from '../screens/NewsPost'; 

const Tab = createBottomTabNavigator();

export default class Footer extends React.Component {
  render(){
      return (
        <NavigationContainer>

          <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{
            showLabel: false,

            styles:{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 30,
              marginHorizontal: 20,
              // shadow...
              shadowColor: '#000',
              shadowOffset:{
                width: 10,
                height: 10,
              },
              paddingHorizontal: 20,
            }
          }}>

            <Tab.Screen name={"Home"} component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                  
                  <View style={{
                    // centering Tab Button...
                    position: 'absolute',
                    top: '25%'
                  }}>
                    <FontAwesome5
                      name= "home"
                      size={20}
                      color={focused ? 'red' : 'grey'}
                      ></FontAwesome5>

                  </View> )}}> 

            </Tab.Screen>

            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{
                    // centering Tab Button...
                    position: 'absolute',
                    top: '25%'
                  }}>
                    <FontAwesome5
                      name= "search"
                      size={20}
                      color={focused ? 'red' : 'grey'}
                      ></FontAwesome5>

                  </View>
                )
              }}>

          </Tab.Screen>

          <Tab.Screen name="Post" component={PostScreen}options={{
                tabBarIcon: ({ focused }) => (
                  <TouchableOpacity>
                    <View style={{
                      width: 45,
                      height: 45,
                      backgroundColor: 'red',
                      borderRadius: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                      
                    }}>
                      <Image source={plus} style={{
                        width: 22,
                        height: 22,
                        tintColor: 'white',
                      }}></Image>
                    </View>

                  </TouchableOpacity>
                )
              }}>

          </Tab.Screen>

          <Tab.Screen name="Notification" component={NotificationScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centering Tab Button...
                  position: 'absolute',
                  top: '25%'
                }}>
                  <FontAwesome5
                    name= "bell"
                    size={20}
                    color={focused ? 'red' : 'grey'}
                    ></FontAwesome5>

                </View>
              )
            }}>
          </Tab.Screen>
            
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  // centering Tab Button...
                  position: 'absolute',
                  top: '25%'
                }}>
                  <FontAwesome5
                    name= "user-alt"
                    size={20}
                    color={focused ? 'red' : 'grey'}
                    ></FontAwesome5>

                </View>
              )
            }}>

          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
          
    );

  }
  
}

function HomeScreen() {
    return (
      
      <React.Fragment>
        
      </React.Fragment>
    );
  }
  
  function SearchScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search Location!</Text>
      </View>
    );
  }
  
  function PostScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Post!</Text>
      </View>
    );
  }
  
  function NotificationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notification!</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignHorizontal: 'center',
      alignItems: 'center',
    },
    safe_area_view: {
      flex: 1
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: '#fff',
    }
  });


