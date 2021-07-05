import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { Divider } from '../../components/Divider';

import { Nemsei, Container, Avatar, Wrapper, Content, Details, Name, Separator, Time, MessageAbstract, NumberOfNotifications } from './styles';

export function GroupsPage() {
  const { navigate } = useNavigation()

  const messages = [
    {
      id: '1',
      name: "Nem sei mas é isso",
      time: "16:32",
      message: "Este fim de semana vou sair"
    },
  ]

  function handleNavigateToChat() {
    navigate('Chat')
  }

  return (
    <Nemsei>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Container activeOpacity={0.7} onPress={handleNavigateToChat}>
              <Wrapper>
                <Avatar source={{uri: "https://github.com/diogom14.png"}} />
                <Content>
                  <Details>
                    <Name>{ item.name }</Name>
                    <Separator>•</Separator>
                    <Time>{ item.time }</Time>
                  </Details>
                  <MessageAbstract 
                    numberOfLines={1}
                  >
                    { item.message }
                  </MessageAbstract>
                </Content>
              </Wrapper>

              <NumberOfNotifications>3</NumberOfNotifications>
            </Container>
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
    </Nemsei>
  );
};
