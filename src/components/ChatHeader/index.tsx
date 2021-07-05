import React from 'react'
import { Feather } from "@expo/vector-icons";

import { Container, HeaderTop, Avatar, Wrapper, Nome } from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export function ChatHeader() {
    const { goBack } = useNavigation()

    function handleGoBack() {
        goBack()
    }

    return (
      <Container>
        <HeaderTop>
          <Wrapper>
            <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7}>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <Avatar source={{ uri: "https://github.com/diogom14.png" }} />
            <Nome numberOfLines={1}>Nem sei mas é isso</Nome>
          </Wrapper>
          <TouchableOpacity activeOpacity={0.7}>
          <Feather name="more-vertical" size={24} color="#fff" />
          </TouchableOpacity>
        </HeaderTop>
      </Container>
    );
}