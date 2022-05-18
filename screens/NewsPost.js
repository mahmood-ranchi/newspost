import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

import {
  Container,
  Title,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoView,
  PostTime,
  PostLocation,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
} from "../styles/post-styles";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class NewsPost extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Card>
            <UserInfo>
              <UserImg source={require("../images/users/avatar1.jpg")} />
              <UserInfoView>
                <UserName>Rajnish Mehra</UserName>
                <PostLocation>Itki-Ranchi State News</PostLocation>
                <PostTime>4 hours ago</PostTime>
              </UserInfoView>
            </UserInfo>
            <PostText>Itki me Plaas Mart Shop ka udghatan hua</PostText>
            <PostImg source={require("../images/post/img 1.jpg")} />
            <InteractionWrapper>
              <Interaction active>
                <Ionicons name="heart" size={22} color="#2e64e5" />
                <InteractionText active>12 Likes</InteractionText>
              </Interaction>
              <Interaction>
                <Ionicons name="md-chatbubble-outline" size={22} />
                <InteractionText>Comment</InteractionText>
              </Interaction>

              <Interaction>
                <Ionicons name="md-logo-whatsapp" size={22} />
                <InteractionText>Share</InteractionText>
              </Interaction>
              <Interaction>
                <Ionicons name="download-outline" size={22} />
                <InteractionText>Download</InteractionText>
              </Interaction>
            </InteractionWrapper>
          </Card>

          <Card>
            <UserInfo>
              <UserImg source={require("../images/users/avatar 2.jpg")} />
              <UserInfoView>
                <UserName>Ritika Bushra</UserName>
                <PostLocation>Mandar-Ranchi State News</PostLocation>
                <PostTime>3 hours ago</PostTime>
              </UserInfoView>
            </UserInfo>
            <PostText>Rangarang karyakaram</PostText>
            <PostImg source={require("../images/post/img 2.jpg")} />
            <InteractionWrapper>
              <Interaction>
                <Ionicons name="heart-outline" size={22} />
                <InteractionText>Like</InteractionText>
              </Interaction>
              <Interaction>
                <Ionicons name="md-chatbubble-outline" size={22} />
                <InteractionText>Comment</InteractionText>
              </Interaction>

              <Interaction>
                <Ionicons name="md-logo-whatsapp" size={22} />
                <InteractionText>Share</InteractionText>
              </Interaction>
              <Interaction>
                <Ionicons name="download-outline" size={22} />
                <InteractionText>Download</InteractionText>
              </Interaction>
            </InteractionWrapper>
          </Card>
        </Container>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
