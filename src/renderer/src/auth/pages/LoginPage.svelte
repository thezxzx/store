<script lang="ts">
  import { validator } from "@felte/validator-zod"
  import { createForm } from "felte"
  import { auth } from "../../firebase/firebase"
  import { signInEmailAndPassword } from "../../firebase/firebaseAuth"
  import { user } from "../../stores/userStore"
  import { loginForm, loginSchema as schema } from "../interfaces"

  
  const { form, errors, isValid } = createForm({
    async onSubmit(values: loginForm) {
      await signInEmailAndPassword(auth, values.email, values.password);
      console.log({$user});
      
    },
    extend: validator({ schema }),
  })
  // TODO: Aplicar rutas
  // TODO: Redirigir a una pantalla de inicio
</script>

<main>
  <form class="hero min-h-screen bg-base-200"
    use:form
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 class="text-center font-bold text-3xl text-white">Iniciar Sesión</h2>
          <div class="form-control">
            <label for="email" class="label">
              <span class="label-text">Correo:</span>
            </label>
            <input name="email" type="text" placeholder="correo@gmail.com" class="input input-bordered" id="email" />
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
              <span class="label-text">Contraseña:</span>
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
          <label for="" class="label">
            <a href="#" class="label-text-alt link link-hover">Clic aquí para crear una cuenta</a>
          </label>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit" disabled={!$isValid}>Iniciar sesión</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>
