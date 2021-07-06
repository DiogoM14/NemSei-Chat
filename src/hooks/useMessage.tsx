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
  createMessage: (messageInput: any) => void
}

const MessageContext = createContext<MessageContextData>(
  {} as MessageContextData
)

export function MessageProvider({ children }: MessageProviderProps) {
  const [messages, setMessages] = useState<Message[]>([])

  function createMessage(messageInput: any) {
    setMessages([...messages, messageInput])
    // console.log(messages)
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