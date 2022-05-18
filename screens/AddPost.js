import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import * as ImagePicker from 'expo-image-picker';

import {InputField,
    InputWrapper, 
    PostButton,
    PostButtonText,
    ButtonWrapper,
    PostImg,
}  from '../styles/add-post-style.js';

const AddPost = () => {
    const staticImage = require("../images/default-image.png");
    const [image, setImage] = useState(null);
    const [imageData, setImageData] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
            const dataa = Object.values(result);
          setImage(result.uri);
          setImageData(result);
          console.log('result',dataa[0]);
          console.log('result.uri',result.uri);
        }
      };
      const ImageData = () => {
        alert(imageData);
      }
    return(
        <View style={styles.container}>
            
            <InputWrapper>

                <PostImg source={{ uri: image } }  />
            
                <ButtonWrapper>

                
                    <PostButton onPress={pickImage}>
                        <Ionicons name='heart' size={24} color="#2e64e5" />
                        <PostButtonText>Choose Image</PostButtonText>
                    </PostButton>
                    <PostButton onPress={ImageData}>
                        <Ionicons name='heart' size={24} color="#2e64e5" />
                        <PostButtonText>Choose Video</PostButtonText>
                    </PostButton>
                </ButtonWrapper>
         
                <InputField
                    placeholder="What's on your mind?"
                    multiline
                    numberOfLines={4}
                />
                <PostButton onPress={() => alert("Button Clicked!")}>
                    <Ionicons name='heart' size={24} color="#2e64e5" />
                    <PostButtonText>Post News</PostButtonText>
                </PostButton>
                
            </InputWrapper>
            
        </View>
    )
};
export default AddPost;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});