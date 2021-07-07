import React from 'react'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Message = {
  message: string
}

type MessageProviderProps = {
  children: ReactNode
}

type MessageContextData = {
  messages: Message[]
  createMessage: (messageInput: Message) => void
}

const MessageContext = createContext<MessageContextData>(
  {} as MessageContextData
)

export function MessageProvider({ children }: MessageProviderProps) {
  const [messages, setMessages] = useState<Message[]>([])

  function createMessage(messageInput: Message) {
    setMessages([...messages, messageInput])
  }

  return (
    <MessageContext.Provider value={{ messages, createMessage }}>
      { children }
    </MessageContext.Provider>
  )
}

export function useMessages() {
  const context = useContext(MessageContext)

  return context
}