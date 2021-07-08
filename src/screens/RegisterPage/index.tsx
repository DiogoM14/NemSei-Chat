import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { FieldsInput } from '../../components/FieldsInput'
import { auth } from '../../services/firebase'

import { Container, Register, TextRegister, RegisterBtn, BtnText } from "./styles"

type FormData = {
  email: string
  password: string
}

export function RegisterPage() {
  const { navigate } = useNavigation()

  const { handleSubmit, control } = useForm<FormData>()

  function handleNavigateToHome() {
    navigate('TabNavigator')
  }

  const onSubmit = ({ email, password }: FormData) => {
    console.log(email, password)

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // Se o auth não estiver vazio
          handleNavigateToHome()
        }
      })
      .catch((error) => alert(error.message));
  }

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  return (
    <Container>
      <Register>Registo</Register>
      <TextRegister>Faz registo com a tua conta do IPP.</TextRegister>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <FieldsInput
            inputText="Insira o seu e-mail..."
            onChangeText={(value: string) => onChange(value)}
            value={value}
          />
        )}
      />
      
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <FieldsInput
            inputText="Insira a password..."
            onChangeText={(value: any) => onChange(value)}
            value={value}
          />
        )}
      />

      {/* <FieldsInput inputText="Insira o primeiro nome..." />
      <FieldsInput inputText="Insira o último nome..." />
      <FieldsInput inputText="Insira a password..." tipo={true} />
      <FieldsInput inputText="Confirme a password..." tipo={true} /> */}

      <RegisterBtn onPress={handleSubmit(onSubmit)}>
        <BtnText>Registar</BtnText>
      </RegisterBtn>
    </Container>
  )
}