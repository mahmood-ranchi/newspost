import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color:blue;
`;

export const Card = styled.View`
  background-color: #f8f8f8;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px; 
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const UserInfoView = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
`;

export const PostLocation = styled.Text`
  font-size: 12px;
  color: blue;

`;

export const PostTime = styled.Text`
  font-size: 11px;
  color: #666;

`;
export const PostText = styled.Text`
  font-size: 16px;
  color: black;
  padding-left: 10px;
  padding-right: 10px;

`;

export const PostImg = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border-radius: 5px;
`;
export const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
`;

export const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-vertical: center;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;
export const InteractionText = styled.Text`
  font-size: 9px;
  font-weight: bold;
  color: ${props => props.active ? '#2e64e5' : '#333'};
  margin-top: 3px;
  margin-left: 3px;
`;
export const MoreOption = styled.View`
  flex-direction: row; 
  justify-content: flex-end;
`;
