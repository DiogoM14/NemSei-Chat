import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background: #202024;
  flex-direction: column;
  padding: 24px 24px 0;
`

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
`

export const Wrapper = styled.View`
  flex-direction: row;
`

export const Titulo = styled.Text `
  color: #fff;
  font-size: 26px; 
  font-family: 'Ubuntu_500Medium';
`

export const Selector = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 32px;
`;

export const Box = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu_500Medium';
`;