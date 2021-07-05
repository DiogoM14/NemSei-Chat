import React from 'react';
import { FlatList } from 'react-native';

import { Divider } from '../Divider';

import { Container, Avatar, Wrapper, Content, Details, Name, Separator, Time, MessageAbstract, NumberOfNotifications } from './styles';

export function Message() {
  const messages = [
    {
      id: '1',
      name: "Rafinha",
      time: "16:32",
      message: "Este fim de semana vou sair"
    },
    {
      id: '2',
      name: "Diogo",
      time: "16:32",
      message: "Não valem nada palhaços"
    },
    {
      id: '3',
      name: "Mongol",
      time: "16:32",
      message: "Juro que não copiamos stor!!! :D"
    },
    {
      id: '4',
      name: "Drogado",
      time: "16:32",
      message: "Não me arranjas mais daquela? hehe"
    },
  ]

  return (
    <>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <Container activeOpacity={0.7}>
            <Wrapper>
              <Avatar source={{uri: "https://github.com/diogom14.png"}} />
              <Content>
                <Details>
                  <Name>{ item.name }</Name>
                  <Separator>•</Separator>
                  <Time>{ item.time }</Time>
                </Details>
                <MessageAbstract numberOfLines={1}>
                  { item.message }
                </MessageAbstract>
              </Content>
            </Wrapper>

            <NumberOfNotifications>3</NumberOfNotifications>
          </Container>
        )}
        />
    </>
  )
}
