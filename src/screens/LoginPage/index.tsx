import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';

import { FieldsInput } from '../../components/FieldsInput'
import { auth } from '../../services/firebase';

import { Container, Login, TextLogin, LoginBtn, BtnText, TextRegister, InputProvisorio } from "./styles";

type FormData = {
  email: string
  password: string
}

export function LoginPage() {
  const { navigate } = useNavigation()
  const { handleSubmit, control } = useForm<FormData>()
  const [ isFocused, setIsFocused ] = useState(false)

  function handleNavigateToHome() {
    navigate('TabNavigator')
  }

  function handleNavigateToRegister() {
    navigate('Register')
  }

  const onSubmit = ({ email, password }: FormData) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        handleNavigateToHome()
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Login>Login</Login>
      <TextLogin>Dá login com a tua conta do IPP.</TextLogin>
      <Controller
        control={control}
        name="email"
        render={({field: { onChange, value }}) => (
          // <FieldsInput
          //   inputText="Insira o e-mail..." 
          //   onChangeText={value => onChange(value)}
          //   value={value}
          // />

          <InputProvisorio 
            placeholder="Insira o e-mail..." 
            placeholderTextColor="#8E8E8E"
            secureTextEntry={false}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            isFocused={isFocused}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
      />
      
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          // <FieldsInput
          //   inputText="Insira a password..." 
          //   onChangeText={value => onChange(value)}
          //   value={value}
          // />

          <InputProvisorio 
          placeholder="Insira a password..." 
          placeholderTextColor="#8E8E8E"
          secureTextEntry={true}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          isFocused={isFocused}
          onChangeText={value => onChange(value)}
          value={value}
        />
        )}
      />

      <LoginBtn onPress={handleSubmit(onSubmit)}>
        <BtnText>Entrar</BtnText>
      </LoginBtn>
      <TextRegister onPress={handleNavigateToRegister}>
        Não tem conta? Crie uma nova!
      </TextRegister>
    </Container>
  );
}