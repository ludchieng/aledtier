<template>
  <thead>
    <tr>
      <td class="col-rating">
        <button>Settings</button>
      </td>
      <td class="col-subject"></td>
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
