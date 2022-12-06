<template>
  <TierlistPage/>
</template>

<script>
import TierlistPage from './components/TierlistPage.vue'

export default {
  name: 'App',
  components: {
    TierlistPage
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body {
  background-color: #1b1b1b;
}
</style>
