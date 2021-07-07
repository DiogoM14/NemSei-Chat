import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'

import { useMessages } from '../../hooks/useMessage'

import { Container, InputArea, ButtonIcon } from './styles'

type FormData = {
  message: string
}

export function TextInput() {
  const { createMessage } = useMessages()

  const { handleSubmit, control } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    createMessage(data)
  }

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  return (
    <Container>
      <Controller
        control={control}
        name="message"
        render={({field: { onChange, value }}) => (
          <InputArea 
            placeholder="Escreva uma mensagem..." 
            placeholderTextColor="#8E8E8E" 
            multiline 
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
  )
}

