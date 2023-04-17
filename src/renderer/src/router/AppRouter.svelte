<script lang="ts">
  import { Route, Router } from 'svelte-routing-next'
  import LoginPage from '../auth/pages/LoginPage.svelte'
  import RegisterPage from '../auth/pages/RegisterPage.svelte'
  import HomePage from '../home/pages/HomePage.svelte'

</script>

<Router>
  <Route path="/" component={ HomePage }  />
  <Route path="/register" component={ RegisterPage } />
  <Route path="/login" component={ LoginPage } />
</Router>