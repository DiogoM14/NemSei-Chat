import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { FieldsInput } from '../../components/FieldsInput'

import { Container, Login, TextLogin, LoginBtn, BtnText, TextRegister } from "./styles";

export function LoginPage() {
  const { navigate } = useNavigation()

  function handleNavigateToHome() {
    navigate('TabNavigator')
  }

  function handleNavigateToRegister() {
    navigate('Register')
  }

  return (
    <Container>
      <Login>Login</Login>
      <TextLogin>Dá login com a tua conta do IPP.</TextLogin>
      <FieldsInput inputText="Insira o seu e-mail..." />
      <FieldsInput inputText="Insira a password..." tipo={true} />

      <LoginBtn onPress={handleNavigateToHome}>
        <BtnText>Entrar</BtnText>
      </LoginBtn>
      <TextRegister onPress={handleNavigateToRegister}>
        Não tem conta? Crie uma nova!
      </TextRegister>
    </Container>
  );
}