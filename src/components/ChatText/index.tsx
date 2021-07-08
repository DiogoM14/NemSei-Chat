import React from 'react'
import { FlatList } from 'react-native';

import { useMessages } from '../../hooks/useMessage'

import { Container, Wrapper, Texto, Avatar } from "./styles"

export type Props = {
  owner: boolean
}

export function ChatText({ owner }: Props) {
  const { messages } = useMessages()

  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      inverted
      contentContainerStyle={{ flexDirection: 'column-reverse' }}
      renderItem={({ item }) => (
        <Container owner={owner}>
          <Avatar owner={owner} source={{ uri: "https://github.com/diogom14.png" }} />

          <Wrapper owner={owner}>
            <Texto>{ item.message}</Texto>

          </Wrapper>
        </Container>
      )}
    />
  )
}

