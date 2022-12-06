<template>
  <thead>
    <tr>
      <td class="col-tier">
        <button>Settings</button>
      </td>
      <td class="col-subject"></td>
      <td
        v-for="(criteria, i) in $store.state.criterias"
        :key="`criteria-${i}`"
        class="col-ratings" 
      >
        {{ criteria }}
      </td>
      <td class="col-add-col">
        <button id="btn-add-col">+</button>
      </td>
      <td class="col-scoring">/10</td>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'TierlistTableHeader',
}
</script>

<style scoped>
.col-scoring {
  width: 3rem;
}

.col-add-col {
  width: 1rem;
  padding: 0
}
</style>
