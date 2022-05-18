import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
    }) => {
  return (
      
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor,
      }}
      onPress={onPress}>
      <Text
        style={{...styles.title, ...textStyle, color: titleColor || '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#512DA8',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;