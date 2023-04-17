import { showErrorAlert } from './showAlerts'

export const handleErrors = (error: any) => {
  firebaseError(error)
}

// Errores de firebase
const firebaseError = (error: any) => {
  const errorCodes = {
    'auth/email-already-in-use': 'Este correo ya está registrado'
  }
  showErrorAlert(errorCodes[error.code])
}
