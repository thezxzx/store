<script lang="ts">
  import { createForm } from 'felte'
  import { auth } from '../../firebase/firebase'
  import { createUserEmailPassword } from '../../firebase/firebaseAuth'
  import { isSamePassword, validateEmail, validatePassword } from '../../shared/utils/validators'
  import { IRegister } from '../interfaces'

  const { form, warnings, touched } = createForm({
    async onSubmit(values: IRegister) {
      console.log( values );
      await createUserEmailPassword(auth, values.email, values.password);
    },
    warn(values) {
      const warnings = {
        email: '',
        password: '',
        confirmPassword: ''
      }

      if(values.email?.length === 0 || validateEmail(values.email)) {
        warnings.email = validateEmail(values.email)
      }

      if(validatePassword(values.password, values.confirmPassword)) {
        warnings.password = validatePassword(values.password, values.confirmPassword);
      }
      
      if(isSamePassword(values.password, values.confirmPassword)) {
        warnings.confirmPassword = isSamePassword(values.password, values.confirmPassword);
      }
            
      return warnings;
    }
  })
</script>

<main>
  <form class="hero min-h-screen bg-base-200"
    use:form
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="text-center font-bold text-3xl text-white">Registrarse</h2>
          <div class="form-control">
            <label for="email" class="label">
              <span class="label-text">Email:</span>
            </label>
            <input name="email" type="text" placeholder="correoEjemplo@gmail.com" class="input input-bordered" id="email" />
            <p class="text-center mt-3 text-red-500">
              { ($warnings.email && $touched.email) ? $warnings.email : '' }
            </p>
          </div>
          <div class="form-control">
            <label for="password" class="label">
              <span class="label-text">Password:</span>
            </label>
            <input name="password" type="password" placeholder="Contraseña" class="input input-bordered" id="password" />
            <p class="text-center mt-3 text-red-500">
              { ($warnings.password && $touched.password) ? $warnings.password : '' }
            </p>
          </div>
          <div class="form-control">
            <label for="confirmPassword" class="label">
              <span class="label-text">Confirmar contraseña:</span>
            </label>
            <input name="confirmPassword" type="password" placeholder="Confirmar contraseña" class="input input-bordered" id="confirmPassword" />
            <p class="text-center mt-3 text-red-500">
              { ($warnings.confirmPassword && $touched.confirmPassword) ? $warnings.confirmPassword : '' }
            </p>
            <label for="" class="label">
              <a href="#" class="label-text-alt link link-hover">¿Ya tienes una cuenta, clic aquí para iniciar sesión?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>
