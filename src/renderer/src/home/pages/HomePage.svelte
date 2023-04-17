<script lang="ts">
  import { afterUpdate, onMount } from 'svelte'
  import { navigate } from 'svelte-routing-next'
  import { auth } from '../../firebase/firebase'
  import { signOutSession } from '../../firebase/firebaseAuth'
  import { user } from "../../stores/userStore"

  onMount( () => {
    if( !$user || !$user.emailVerified ) navigate('/login', {
      replace: true
    })
  })

  const handleSignOut = async () => {
    await signOutSession(auth);
  }

  afterUpdate(() => {
    if( !$user || !$user.emailVerified ) navigate('/login', {
      replace: true
    })
  })

</script>


<main>
  <button class="btn" on:click={handleSignOut}>Cerrar sesión</button>
</main>