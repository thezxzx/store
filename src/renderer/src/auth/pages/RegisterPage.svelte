<script lang="ts">
  import { createForm } from 'felte'
  import { auth } from '../../firebase/firebase'
  import { createUserEmailPassword } from '../../firebase/firebaseAuth'
  import { IRegister } from '../interfaces'

  const { form } = createForm({
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
      if( values.password?.length < 6) {
        warnings.password = 'La contraseña debe de tener mínimo 6 caracteres'
      }
      if( values.password !== values.confirmPassword ) {
        warnings.password = 'Las contraseñas no coinciden'
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
          <div class="form-control">
            <label for="email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input name="email" type="text" placeholder="correoEjemplo@gmail.com" class="input input-bordered" id="email" />
          </div>
          <div class="form-control">
            <label for="confirmPassword" class="label">
              <span class="label-text">Password</span>
            </label>
            <input name="password" type="password" placeholder="Contraseña" class="input input-bordered" id="confirmPassword" />
          </div>
          <div class="form-control">
            <label for="password" class="label">
              <span class="label-text">Password</span>
            </label>
            <input name="confirmPassword" type="password" placeholder="Confirmar contraseña" class="input input-bordered" id="password" />
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
