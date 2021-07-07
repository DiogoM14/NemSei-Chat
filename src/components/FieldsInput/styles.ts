import styled from 'styled-components/native'

type Props = {
  isFocused: boolean
}

export const Input = styled.TextInput<Props>`
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
