import { StatusBar } from 'expo-status-bar';
import { Button, Image, Platform, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useState} from 'react';
import * as Firebase from '../firebase/firebase';
import * as ImagePicker from 'expo-image-picker';
import AddPost from "./AddPost";
import Header from "../components/Header";

import {Container,
    Title, 
}  from '../styles/post-styles';

export default class NewsFeed extends React.Component {
    render(){

        return (
     
          <Container>
          <Header/>

          <AddPost/>

        </Container>
      );
  
    }
    
  }
