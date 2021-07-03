import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  margin-top: 22px;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 62px;
  height: 62px;
  border-radius: 31px;
`

export const Wrapper = styled.View`
  flex-direction: row;
`

export const Content = styled.View`
margin-left: 16px;

`

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
`

export const Separator = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 8px;
`;

export const Time = styled.Text`
  font-size: 16px;
  color: #fff;
`

export const MessageAbstract = styled.Text`
  font-size: 16px;
  color: #8E8E8E;
  margin-top: 8px;
  width: 200px;
`

export const NumberOfNotifications = styled.Text`
  padding: 4px 9px;
  background: #8257E5;
  border-radius: 20px;
  font-weight: 600;
`

