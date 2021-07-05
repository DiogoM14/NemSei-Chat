import React from 'react'

import { Container, Wrapper, Texto, Avatar } from "./styles"

export type Props = {
  owner: boolean
}

export function ChatText({ owner }: Props) {
  return (
    <>
      <Container owner={owner}>
        <Avatar owner={owner} source={{ uri: "https://github.com/diogom14.png" }} />

        <Wrapper owner={owner}>
          <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit aliquam corrupti praesentium dolor eum odio atque enim eligendi nesciunt ducimus, ipsam, facere inventore possimus totam dolorem hic consequatur a!</Texto>

        </Wrapper>
      </Container>
    </>
  )
}

