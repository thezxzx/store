<script lang="ts">
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-routing-next'
  import { user } from "../../stores/userStore"

  onMount( () => {
    if( !$user || !$user.emailVerified ) navigate('/login', {
      replace: true
    })
  })


</script>


<main>
  <h1>HOME PAGE</h1>
</main>