import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';

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
  MoreOption,
} from "../styles/post-styles";

const PostCard = ({item}) => {

  const onLikePressed = (param) => {
      console.warn({param});
      // Alert.alert('Alert Title', 'My Alert Msg', [
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.log('Cancel Pressed'),
      //     style: 'cancel',
      //   },
      //   { text: 'OK', onPress: () => console.log('OK Pressed') },
      // ]);
      
    }

    const likeIcon = item.liked ? 'heart' : 'heart-outline';

    // if(item.likes == 1)
    // {
    //     const strLikes = item.likes + ' Like';
    // }else if(item.likes > 1){
    //     const strLikes = item.likes + ' Likes';
    // }else{
    //     const strLikes = 'Like';
    // }
  
    const strLikes = item.likes>0 ? item.likes + ' Likes' : ' Like';

    const commentIcon = item.comments>0 ? 'comment-multiple' : 'comment-outline';
 
    const strComments = item.comments>0 ? item.comments + ' Comments' : 'Comment';
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImage} />
        
        <UserInfoView>
          <UserName>{item.userName}</UserName>
          <PostLocation>Itki-Ranchi State News</PostLocation>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoView>

        <MoreOption>
            <Feather name="more-vertical" size={22} color="#2e64e5" />
        </MoreOption>
      </UserInfo>
      
      <PostText>{item.post}</PostText>
      <PostImg source={item.postImg} />
      <InteractionWrapper>
        <Interaction active={item.liked} onPress={onLikePressed(item.id)}>
          <Ionicons name={likeIcon} size={22} color="#2e64e5" />
          <InteractionText active={item.liked}>{strLikes}</InteractionText>
        </Interaction>
        <Interaction>
          <MaterialCommunityIcons name={commentIcon} size={22} color="#2e64e5" />
          <InteractionText>{strComments}</InteractionText>
        </Interaction>

        <Interaction>
          <Ionicons name="md-logo-whatsapp" size={22} color="green" />
          <InteractionText>Share</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="download-outline" size={22} color="#2e64e5" />
          <InteractionText>Download</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};
export default PostCard;
