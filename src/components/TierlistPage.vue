<template>
  <div>
    <h1>{{ $store.state.tierListName }}</h1>
    <TierlistTable />
  </div>
</template>

<script>
import TierlistTable from './TierlistTable.vue'
export default {
  name: 'TierlistPage',
  components: {
    TierlistTable
  }
}
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
</style>
