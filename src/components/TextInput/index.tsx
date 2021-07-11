import React, { useState } from 'react'
import firebase from 'firebase'
import { MaterialIcons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'

import { useMessages } from '../../hooks/useMessage'

import { Container, InputArea, ButtonIcon } from './styles'

import { db, auth } from '../../services/firebase'

type FormData = {
  message: string
}

export function TextInput() {
  const [ text, setText ] = useState('')
  const { createMessage } = useMessages()

  const { handleSubmit, control } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    Keyboard.dismiss()

    db.collection('messages').add({ // Adiciona a mensagem à db
      message: data,
      username: auth.currentUser?.email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setText('')
    // createMessage(data)
  }

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <Container>
      <Controller 
        control={control}
        name="message"
        render={({field: { onChange, value }}) => (
          <InputArea 
            placeholder="Escreva uma mensagem..." 
            placeholderTextColor="#8E8E8E" 
            onSubmitEditing={handleSubmit(onSubmit)} 
            // multiline
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
      />

      <ButtonIcon>
        <MaterialIcons 
          name="send"
          size={24}
          color="#fff"
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonIcon>
    </Container>
    </KeyboardAvoidingView>
  )
}

