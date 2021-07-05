import styled from 'styled-components/native'

import { Props } from './index'

export const Container = styled.View<Props>`
  flex-direction: row;
  justify-content: ${props => props.owner ? 'flex-end' : 'flex-start'};
  align-items: flex-end;
  margin-bottom: 16px;
`

export const Wrapper = styled.View<Props>`
  max-width: 70%;
  max-height: 100%;
  border-radius: 18px;
  border-bottom-left-radius: ${props => props.owner ? '18px' : '2px'};
  border-bottom-right-radius: ${props => props.owner ? '2px' : '18px'};
  background-color: ${props => props.owner ? '#8257e6' : '#29292e'};
  justify-content: center;
  padding: 16px;
`

export const Texto = styled.Text`
  color: #fff;
  font-family: "Ubuntu_400Regular";
  font-size: 15px;
  text-align: left;
`

export const Avatar = styled.Image<Props>`
  display: ${props => props.owner ? 'none' : 'flex'};
  width: 46px;
  height: 46px;
  border-radius: 31px;
  margin-right: 15px;
`