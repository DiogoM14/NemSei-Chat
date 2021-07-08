import React from 'react'
import { useState } from 'react'

import { Input } from './styles'

type Props = {
  inputText: string
  tipo?: boolean
  onChangeText: (value: string) => void
  value?: string
}

export function FieldsInput({ inputText, tipo = false, onChangeText, ...rest }: Props) {
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
