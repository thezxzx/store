import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from 'firebase/auth'
import { handleErrors } from '../shared/utils/errors'
import { showSuccessAlert } from '../shared/utils/showAlerts'

// Crear usuario con correo y contraseña
export const createUserEmailPassword = async (auth: Auth, email: string, password: string) => {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    console.log({ user })
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
  } catch (error) {
    console.error(error)
  }
}
