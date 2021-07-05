import styled from "styled-components/native";

export const Nemsei = styled.View`
  flex: 1;
  background: #121212;
  padding: 0 24px;
`;

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
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  margin-left: 16px;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: "Ubuntu_500Medium";
`;

export const Separator = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 8px;
`;

export const Time = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: "Ubuntu_400Regular";
`;

export const MessageAbstract = styled.Text`
  font-size: 16px;
  color: #8e8e8e;
  margin-top: 8px;
  width: 200px;
  font-family: "Ubuntu_400Regular";
`;

export const NumberOfNotifications = styled.Text`
  padding: 4px 9px;
  background: #8257e6;
  border-radius: 20px;
  font-family: "Ubuntu_500Medium";
`;
