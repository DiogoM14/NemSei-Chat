import React from 'react'
import { useState } from 'react'
import { UseFormProps } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from './styles'

type Props = UseFormProps & {
  inputText: string
  tipo?: boolean
  onChangeText?: (value: string) => void
  value?: string
}

export function FieldsInput({ inputText, tipo = false, ...rest }: Props) {
  const [ isFocused, setIsFocused ] = useState(false)

  return (
    <Input
      placeholder={inputText}
      placeholderTextColor="#8E8E8E"
      secureTextEntry={tipo}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
      {...rest}
    />
  )
}
