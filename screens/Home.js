import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

import {Container} from "../styles/post-styles";

const Posts = [
    {
      id: '1',
      userName: 'Manisha Kumari',
      userImage: require('../images/users/avatar1.jpg'),
      postTime: '4 mins ago',
      post: 'मुख्यमंत्री श्री हेमन्त सोरेन ने सिरोम टोली सरना स्थल सौंदर्यीकरण योजना की रखी आधारशिला।',
      postImg: require('../images/post/img 1.jpg'),
      liked: true,
      likes:'14',
      comments: '5'
    },
    {
      id: '2',
      userName: 'Sujata Singh',
      userImage: require('../images/users/avatar 2.jpg'),
      postTime: '24 mins ago',
      post: 'गढ़वा में दर्दनाक हादसा, घर में आग लगने से 3 बच्चे जिंदा जले, 2 की मौत 1 की हालत गंभीर',
      postImg: require('../images/post/img 2.jpg'),
      liked: true,
      likes:'4',
      comments: '2'
  },
  {
    id: '3',
    userName: 'Ratnish Sahu',
    userImage: require('../images/users/avatar 3.jpg'),
    postTime: '3 days ago',
    post: 'रांची के न्यूक्लियस माल में शव पड़े होने की सूचना से हड़कंप, पुलिस के पहुंचते ही उठ खड़ा हुआ युवक, रातभर ढूंढते रहे दोस्त',
    postImg: require('../images/post/img 3.jpg'),
    liked: false,
    likes:'0',
    comments: '0'
},
{
  id: '4',
  userName: 'Jayesh Kundan',
  userImage: require('../images/users/avatar 4.jpg'),
  postTime: '1 day ago',
  post: 'गर्मी का कहर:रामगढ़ का तापमान 400 पहुंचा, गर्म हवा से स्कूली बच्चे हो रहे बीमार',
  postImg: require('../images/post/img 4.jpg'),
  liked: true,
  likes:'10',
  comments: '0'
},

]

export default class Home extends React.Component {
  render() {
    return (
        
        <Container>
          <Header/>

          <FlatList
            data={Posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <PostCard item={item} />}
            showsVerticalScrollIndicator={false}
          />

        </Container>
    );
  }
}
