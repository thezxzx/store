import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: window.api.apiKey,
  authDomain: window.api.authDomain,
  projectId: window.api.projectId,
  storageBucket: window.api.storageBucket,
  messagingSenderId: window.api.messagingSenderId,
  appId: window.api.appId
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore(app)
