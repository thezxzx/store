export const validateEmail = (email: string): string | null => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (email?.length === 0) {
    return 'El correo es obligatorio'
  }

  if (!re.test(String(email).toLowerCase())) {
    return 'El correo no es válido'
  }

  return null
}

export const validatePassword = (password: string, password2: string): string | null => {
  if (password?.length < 6) return 'La contraseña debe de contener al menos 6 caracteres'

  if (isSamePassword(password, password2)) return 'Las contraseñas no coinciden'
  return null
}

export const isSamePassword = (password: string, password2: string): string | null => {
  if (password !== password2) return 'Las contraseñas no coinciden'
  return null
}
