import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Ola, Header, HeaderTabs } from "./styles";

export function MainPage() {
  const { navigate } = useNavigation();

  function goToChatPage() {
    navigate('Chat');
  }

  return (
    <>
      <Header>
          <HeaderTabs>1</HeaderTabs>
          <HeaderTabs>2</HeaderTabs>
          <HeaderTabs>3</HeaderTabs>
      </Header>
      <Container>
        <Ola>Ola</Ola>
        <TouchableOpacity>
          <Text style={{ color: '#fff' }} onPress={goToChatPage}>Ir para chat</Text>
        </TouchableOpacity>
    </Container>
    </>
  )
} 