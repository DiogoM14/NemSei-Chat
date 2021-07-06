import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'

import { Container, InputArea, ButtonIcon } from './styles'
import { useMessages } from '../../hooks/useMessage'
import { event } from 'react-native-reanimated'

type FormData = {
  message: string
};

export function TextInput() {
  const { createMessage } = useMessages()

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    createMessage(data);
  };

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <Container>
      <Controller
        control={control}
        name="message"
        render={({field: { onChange, onBlur, value }}) => (
          <InputArea 
            placeholder="Escreva uma mensagem..." 
            placeholderTextColor="#8E8E8E" multiline 
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

