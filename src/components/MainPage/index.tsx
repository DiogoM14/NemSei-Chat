import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../Header'
import { Message } from '../Message'

import { Container } from "./styles";

export function MainPage() {
  const { navigate } = useNavigation();

  function goToChatPage() {
    navigate('Chat');
  }

  return (
    <>
      <Header />
      
      <Container>
        <Message />

      </Container>
    </>
  )
} 