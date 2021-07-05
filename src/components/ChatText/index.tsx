import React from 'react';

import { Container, Wrapper, Texto, Avatar } from "./styles";

type Props = {
  owner: boolean
}

export function ChatText({ owner }: Props) {
  return (
    <>
      {
        owner ?
          <Container>

            <Wrapper>
              <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex iure assumenda alias omnis sint non, laboriosam, maiores maxime odio temporibus voluptatem rerum quidem optio eum impedit? Necessitatibus, cupiditate culpa!</Texto>

            </Wrapper>
          </Container>
        :
        <Container>
          <Avatar source={{ uri: "https://github.com/diogom14.png" }} />

          <Wrapper>
            <Texto>afsfas</Texto>

          </Wrapper>
        </Container>
      }
    </>
  );
};

