import React from 'react'
import { Feather } from "@expo/vector-icons";

import { Container, HeaderTop, Avatar, Wrapper } from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function ChatHeader() {
    const { goBack } = useNavigation()

    function handleGoBack() {
        goBack()
    }

    return (
      <Container>
        <HeaderTop>
          <RectButton onPress={handleGoBack}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </RectButton>
          <Wrapper>
          <Avatar source={{ uri: "https://github.com/diogom14.png" }} />
          </Wrapper>
        </HeaderTop>
      </Container>
    );
}