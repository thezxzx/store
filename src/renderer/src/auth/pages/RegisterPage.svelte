<script lang="ts">
  import { validator } from '@felte/validator-zod'
  import { createForm } from 'felte'
  import { auth } from '../../firebase/firebase'
  import { createUserEmailPassword } from '../../firebase/firebaseAuth'
  import { registerForm, schema } from '../interfaces'

  const { form, errors, isValid } = createForm({
    async onSubmit(values: registerForm) {
      await createUserEmailPassword(auth, values.email, values.password);
      console.log($isValid)
      console.log(schema);
    },
    extend: validator({ schema }),
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
            {#if $errors.email}
              {#each $errors.email as error}
                <li class="text-center mt-3 text-red-500">
                  { error }
                </li>
              {/each}
            {/if}
          </div>
          <div class="form-control">
            <label for="password" class="label">
              <span class="label-text">Password:</span>
            </label>
            <input name="password" type="password" placeholder="Contraseña" class="input input-bordered" id="password" />
            {#if $errors.password}
              {#each $errors.password as error}
                <li class="text-center mt-3 text-red-500">
                  { error }
                </li>
              {/each}
            {/if}
          </div>
          <div class="form-control">
            <label for="confirmPassword" class="label">
              <span class="label-text">Confirmar contraseña:</span>
            </label>
            <input name="confirmPassword" type="password" placeholder="Confirmar contraseña" class="input input-bordered" id="confirmPassword" />
            {#if $errors.confirmPassword }
              {#each $errors.confirmPassword as error}
                <li class="text-center mt-3 text-red-500">
                  { error }
                </li>
              {/each}
            {/if}
            <label for="" class="label">
              <a href="#" class="label-text-alt link link-hover">¿Ya tienes una cuenta, clic aquí para iniciar sesión?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit" disabled={!$isValid}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>
