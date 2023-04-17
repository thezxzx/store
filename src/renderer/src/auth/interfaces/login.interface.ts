import * as zod from 'zod'

export const loginSchema = zod.object({
  email: zod
    .string()
    .trim()
    .email({
      message: 'El correo no tiene un formato válido'
    })
    .nonempty({
      message: 'El correo es obligatorio'
    }),
  password: zod
    .string()
    .nonempty({
      message: 'La contraseña es obligatoria'
    })
    .min(6, {
      message: 'La contraseña tiene que tener mínimo 6 caracteres'
    })
})

export type loginForm = zod.infer<typeof loginSchema>
