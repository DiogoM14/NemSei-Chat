import React from 'react'
import { useMessages } from '../../hooks/useMessage'
import { useForm } from "react-hook-form";
import { Container, Wrapper, Texto, Avatar } from "./styles"
import { FlatList } from 'react-native';

export type Props = {
  owner: boolean
}

export function ChatText({ owner }: Props) {
  const { messages } = useMessages()
  console.log(messages)

  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.message}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Container owner={owner}>
        <Avatar owner={owner} source={{ uri: "https://github.com/diogom14.png" }} />

        <Wrapper owner={owner}>
          <Texto>{item.message}</Texto>

        </Wrapper>
      </Container>
      )}
    />
    


  )
}

