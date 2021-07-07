import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "nem-sei-chat",
  storageBucket: "nem-sei-chat.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID, 
  measurementId: process.env.MEASUREMENT_ID
})

const db = firebaseApp.firestore()

export default db