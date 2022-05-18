import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

import {Container,
    Title, 
}  from '../styles/post-styles';

export default class SearchLocation extends React.Component {
    render(){
        return (
     
            <Container>
              <Title> This my Search Location Screen</Title>
            </Container>
      );
  
    }
    
  }
