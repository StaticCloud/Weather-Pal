<script>
  import Dashboard from './lib/Dashboard.svelte'
</script>

<main class="main-wrapper">
    <Dashboard/>
</main>

<style>
  .main-wrapper {
    height: 100vh;
  }

  @media screen and (min-width: 907px) {
    .main-wrapper {
      align-items: center;
      justify-content: center;
      display: flex;
    }
  }
</style>
