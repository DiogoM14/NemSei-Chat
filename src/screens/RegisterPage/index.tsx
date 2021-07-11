import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { FieldsInput } from '../../components/FieldsInput'
import { auth } from '../../services/firebase'

import { Container, Register, TextRegister, RegisterBtn, BtnText, InputProvisorio } from "./styles"

type FormData = {
  email: string
  password: string
}

export function RegisterPage() {
  const { navigate } = useNavigation()
  const [ isFocused, setIsFocused ] = useState(false)

  const { handleSubmit, control } = useForm<FormData>()

  function handleNavigateToHome() {
    navigate('TabNavigator')
  }

  const onSubmit = ({ email, password }: FormData) => {
    // console.log(email, password)

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
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