import logo from "../assets/logo1.png";
import bgImage from "../assets/bg-header.png";

import { Feather } from '@expo/vector-icons';
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import {
  HeaderView,
  Touchable,
  LogoImg,
  LogoTextView,
  LogoText

} from "../styles/header-style.js";

export default class Header extends React.Component {
  render() {
    return (

      <HeaderView>
        <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>

        <Touchable>
          <LogoImg source={logo}></LogoImg>
        </Touchable>

        <LogoTextView>
          <LogoText>The News Post</LogoText>
        </LogoTextView>

        <Touchable>
          {/* <FontAwesome name="share-square-o" size={24} color="black" /> */}
          <Feather name="share" size={28} color="black" />
        </Touchable>

        </ImageBackground>
        
      </HeaderView>

     
    );
  }
}

const styles = StyleSheet.create({

  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: 3,
    marginBottom:10,
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3,
    height: 40,
  },
  
 
});
