import React, { useEffect } from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'

import { db } from '../services/firebase'

type Message = {
  id: string
  message: string
}

type MessageProviderProps = {
  children: ReactNode
}

type MessageContextData = {
  messages: Message[]
  createMessage: (messageInput: Message) => void
}

const MessageContext = createContext<MessageContextData>({} as MessageContextData)

export function MessageProvider({ children }: MessageProviderProps) {
  const [messages, setMessages] = useState<Message[]>([{id: '', message: ''}])

  useEffect(() => { //Sempre que o app inicia, é feito um map os documents da db
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data().message.message})))
    })
  }, [])

  // console.log(messages)

  function createMessage(messageInput: Message) {
    // setMessages([...messages, messageInput])
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