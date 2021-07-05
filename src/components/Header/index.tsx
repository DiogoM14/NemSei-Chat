import React from 'react';

import { Feather } from '@expo/vector-icons'

import { Container, Titulo, HeaderTop, Wrapper, Selector, Box, Title } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { TopTabs } from '../../routes/TopTabs';

export function Header() {
    return (
        <Container>
            <HeaderTop>
                <Titulo>Nem Sei Chat</Titulo>

                <Wrapper>
                    <Feather 
                        name="search"
                        size={24}
                        color="#fff"
                    />
                    <Feather 
                        name="more-vertical"
                        size={24}
                        color="#fff"
                        style={{ marginLeft: 16 }}
                    />
                </Wrapper>
            </HeaderTop>
        </Container>
    )
}