import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 100%;
  background-color: #f8f8f8;
`;

export const InputField = styled.TextInput`
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: blue;
  width: 90%;
  background-color: #2e64e515;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
`;
export const PostButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-vertical: center;
  border-radius: 5px;
  padding: 3px 5px;
  background-color: #2e64e515;
  margin-left: 5px;
  margin-top: 5px;
`;
export const PostButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #2e64e5;
  margin-top: 2px;
  margin-left: 2px;
  justify-content: center;
  align-vertical: center;
  padding: 5px
`;
export const PostImg = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 5px;
  border-radius: 5px;
  align-self: center,
`;