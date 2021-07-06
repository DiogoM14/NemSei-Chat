import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #121212;
  padding: 18px;
  padding-top: 8px;
`

export const InputArea = styled.TextInput`
  width: 75%;
  height: 60px;
  background: #202024;
  border-radius: 18px;
  padding-left: 16px;
  color: #fff;
  padding-right: 16px;
`;
export const ButtonIcon = styled(RectButton)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #8257e6;
  border-radius: 31px;
`