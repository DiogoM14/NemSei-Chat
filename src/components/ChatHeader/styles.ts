import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background: #202024;
  flex-direction: column;
  padding: 24px 24px 0;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;

`

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 31px;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;