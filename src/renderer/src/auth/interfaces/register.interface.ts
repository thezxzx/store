// export interface IRegister {
//   email: string
//   password: string
//   confirmPassword: string
// }
import * as zod from 'zod'
export const schema = zod
  .object({
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
        message: 'Tiene que tener mínimo 6 caracteres'
      })
      .trim(),
    confirmPassword: zod
      .string()
      .nonempty({
        message: 'La contraseña es obligatoria'
      })
      .min(6, {
        message: 'Tiene que tener mínimo 6 caracteres'
      })
      .trim()
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Las contraseñas tienen que ser iguales',
    path: ['password']
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Las contraseñas tienen que ser iguales',
    path: ['confirmPassword']
  })

export type registerForm = zod.infer<typeof schema>
