import React from 'react'

import { Text } from 'react-native'
import { ChatHeader } from '../../components/ChatHeader'

import { Container } from './styles'


export function Chat() {
  return (
    <Container>
      <ChatHeader />
    </Container>
  )
}
