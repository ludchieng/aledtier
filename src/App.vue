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
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

body {
  background-color: #1b1b1b;
}

* {
  box-sizing: border-box;
}

*:focus,
textarea:focus {
  outline: 2px solid #3586FF;
  background-color: #3586FF22;
  transition: 70ms;
}
</style>
