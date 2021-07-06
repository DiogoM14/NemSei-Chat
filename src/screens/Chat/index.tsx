import React from 'react'

import { ChatHeader } from '../../components/ChatHeader'
import { ChatText } from '../../components/ChatText'
import { TextInput } from '../../components/TextInput'

import { Container } from "./styles"

export function Chat() {
  return (
    <>
      <ChatHeader />

      <Container>
        <ChatText owner={false} message="sad" />
      </Container>

      <TextInput  />
    </>
  )
}
