import React from 'react'

import { ChatHeader } from '../../components/ChatHeader'
import { ChatText } from '../../components/ChatText';

import { Container } from "./styles";


export function Chat() {
  return (
    <>
      <ChatHeader />

      <Container>
        <ChatText owner={false} />
        <ChatText owner={false} />
        <ChatText owner={true} />
        <ChatText owner={false} />
        <ChatText owner={false} />
        <ChatText owner={false} />
      </Container>
    </>
  )
}
