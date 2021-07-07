import React from 'react'
import { useState } from 'react'

import { Input } from './styles'

type Props = {
  inputText: string
  tipo?: boolean
}

export function FieldsInput({ inputText, tipo = false }: Props) {
  const [ isFocused, setIsFocused ] = useState(false)

  return (
    <Input
      placeholder={inputText}
      placeholderTextColor="#8E8E8E"
      secureTextEntry={tipo}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
    />
  )
}
