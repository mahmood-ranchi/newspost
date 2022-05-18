import styled from 'styled-components/native';

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-color: white;
  top-margin: 3px;
  bottom-margin: 3px;
  height: 45px;
`;
export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: 'transparent'
`;

export const LogoImg = styled.Image`
  width: 40px;
  height: 35px;
  padding: 3px;
  margin-left: 3px;
`;

export const LogoTextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const LogoText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 18px;
  color: black;
  justify-content: center;
  align-items: center;
`;