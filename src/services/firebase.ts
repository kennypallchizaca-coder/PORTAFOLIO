/**
 * Inicializa Firebase (Auth + Firestore + Storage).
 * Práctica: Consumo de servicios/APIs. Variables en `.env.local` (prefijo VITE_).
 */
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAZK6CV7xnpVYo6spCjyiQJKlYZzn1xPFE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "react-74a51.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "react-74a51",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "react-74a51.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "721952767951",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:721952767951:web:04bbaa0b7d9e57d48ec3f4",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

// Configurar Google Provider con opciones recomendadas
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account', // Siempre muestra el selector de cuenta
})

export { app, auth, db, storage, googleProvider }
