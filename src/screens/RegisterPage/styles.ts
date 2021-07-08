import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  background: #121212;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Register = styled.Text`
  color: #fff;
  font-size: 32px;
  font-family: "Poppins_600SemiBold";
  margin-bottom: 8px;
`

export const TextRegister = styled.Text`
  color: #8e8e8e;
  font-family: "Ubuntu_400Regular";
  margin-bottom: 32px;
`;

export const RegisterBtn = styled.TouchableOpacity`
  width: 180px;
  height: 56px;
  background: #8257e6;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

export const BtnText = styled.Text`
  color: #fff;
  font-family: "Ubuntu_500Medium";
  font-size: 24px;
`;