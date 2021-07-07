import React from 'react'

import { FieldsInput } from '../../components/FieldsInput'

import { Container, Login, TextLogin, LoginBtn, BtnText, TextRegister } from "./styles";

export function LoginPage() {
  return (
    <Container>
      <Login>Login</Login>
      <TextLogin>Dá login com a tua conta do IPP.</TextLogin>
      <FieldsInput inputText="Insira o seu e-mail..." />
      <FieldsInput inputText="Insira a password..." tipo={true} />

      <LoginBtn>
        <BtnText>Entrar</BtnText>
      </LoginBtn>
      <TextRegister>Não tem conta? Crie uma nova!</TextRegister>
    </Container>
  );
}