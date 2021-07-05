import styled from 'styled-components/native'

export const Container = styled.View`
  /* ${props.upsidedown && 'transform: rotate(180deg);'} */
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const Wrapper = styled.View`
  max-width: 70%;
  max-height: 100%;
  border-radius: 18px;
  border-bottom-left-radius: 2px;
  background-color: #29292e;
  justify-content: center;
  padding: 16px;
`

export const Texto = styled.Text`
    color: #fff;
    font-family: "Ubuntu_400Regular";
    font-size: 15px;
    text-align: left;
`

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 31px;
  margin-right: 15px;
`;