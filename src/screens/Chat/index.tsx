import React from 'react'

import { ChatHeader } from '../../components/ChatHeader'
import { ChatText } from '../../components/ChatText'
import { TextInput } from '../../components/TextInput'

import { Container, Wrapper } from "./styles"

export function Chat() {
  return (
    <>
      <ChatHeader />

      <Container>
        <Wrapper>

        <ChatText owner={true} />
        </Wrapper>
      </Container>

      <TextInput  />
    </>
  )
}
