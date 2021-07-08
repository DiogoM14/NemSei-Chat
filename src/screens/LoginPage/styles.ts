import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  isFocused: boolean
}

export const Container = styled.View`
  background: #121212;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Login = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: "Poppins_600SemiBold";
  margin-bottom: 8px;
`

export const TextLogin = styled.Text`
  color: #8e8e8e;
  font-family: "Ubuntu_400Regular";
  margin-bottom: 72px;
`;

export const LoginBtn = styled.TouchableOpacity`
  width: 180px;
  height: 56px;
  background: #8257e6;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`

export const BtnText = styled.Text`
  color: #fff;
  font-family: "Ubuntu_500Medium";
  font-size: 24px;
`;

export const TextRegister = styled.Text`
  color: #8e8e8e;
  font-family: "Poppins_400Regular";
  font-size: 13px;
  bottom: 0;
  position: absolute;
  margin-bottom: 30px;
  border-bottom-width: 1px;
  border-color: #8e8e8e;
`;

export const InputProvisorio = styled.TextInput<Props>`
  background: #202024;
  width: 90%;
  height: 60px;
  margin: 16px;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: #fff;
  font-family: 'Ubuntu_400Regular';
  font-size: 16px;

  border-bottom-width: ${props => props.isFocused ? '1px' : '0px'};
  border-bottom-color: ${props => props.isFocused ? '#8257e6' : '#202024'};
`