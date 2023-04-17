import { user } from '../../stores/userStore'
import { showErrorAlert } from './showAlerts'

export const handleErrors = (error: any) => {
  firebaseError(error)
}

// Errores de firebase
const firebaseError = (error: any) => {
  user.set(null)
  const errorCodes = {
    'auth/email-already-in-use': 'Este correo ya está registrado',
    'auth/user-not-found': 'Usuario o contraseña no valido', // No hay un usuario registrado con ese correo
    'auth/wrong-password': 'Usuario o contraseña no valido'
  }
  showErrorAlert(errorCodes[error.code])
}
