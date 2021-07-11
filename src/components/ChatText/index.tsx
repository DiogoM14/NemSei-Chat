import React from 'react'
import { FlatList } from 'react-native'

import { useMessages } from '../../hooks/useMessage'
import { auth } from '../../services/firebase'

import { Container, Wrapper, Texto, Avatar, Name } from "./styles"

export function ChatText() {
  const { messages } = useMessages()
  return (
    <FlatList
      data={messages}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      // inverted
      // contentContainerStyle={{ flexDirection: 'column-reverse' }}
      renderItem={({ item }) => (
        <>
          { item.username == auth.currentUser?.email ?
            <Container owner={true}>
    
              <Avatar owner={true} source={{ uri: "https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" }} />
    
              <Wrapper owner={true}>
                <Texto>{ item.message}</Texto>
              </Wrapper>
            </Container>
            :
            <Container owner={false}>
    
            <Avatar owner={false} source={{ uri: "https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png" }} />
  
            <Wrapper owner={false}>
              <Name>{ item.username }</Name>
              <Texto>{ item.message}</Texto>
            </Wrapper>
          </Container>
          }
          </>
      )}
    />
  )
}

