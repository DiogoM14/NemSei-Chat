import React from 'react'

import { Feather } from '@expo/vector-icons'

import { Container, Titulo, HeaderTop, Wrapper } from "./styles"

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