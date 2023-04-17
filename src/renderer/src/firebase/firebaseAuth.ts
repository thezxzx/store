import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { handleErrors } from '../shared/utils/errors'
import { showSuccessAlert } from '../shared/utils/showAlerts'
import { user } from '../stores/userStore'

// Crear usuario con correo y contraseña
export const createUserEmailPassword = async (auth: Auth, email: string, password: string) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    // console.log({ user })
    await sendEmailVerificationUser(user)
    showSuccessAlert('Verifica tu correo')
  } catch (error) {
    handleErrors(error)
    // console.error(error)
  }
}

// Enviar correo de verificación al usuario
const sendEmailVerificationUser = async (user: User) => {
  try {
    await sendEmailVerification(user)
  } catch (error) {
    console.error(error)
  }
}

// Cerrar sesión del usuario
export const signOutSession = async (auth: Auth) => {
  try {
    await signOut(auth)
    // Eliminar usuario
    user.set(null)
  } catch (error) {
    console.error(error)
  }
}

export const signInEmailAndPassword = async (auth: Auth, loginEmail: string, password: string) => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      password
    )
    const { email, emailVerified, uid } = userCredential.user
    user.set({
      email,
      emailVerified,
      uid,
      loginTime: new Date()
    })
  } catch (error) {
    handleErrors(error)
    // console.error(error)
  }
}
