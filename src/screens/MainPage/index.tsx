import React from 'react'
import { Text } from 'react-native'

import { Message } from '../../components/Message'
import { auth } from '../../services/firebase'

import { Container } from "./styles"

export function MainPage() {
  const user = auth.currentUser?.email

  return (
    <Container>
      <Message />
      <Text>
        {user}
      </Text>
    </Container>
  )
} 