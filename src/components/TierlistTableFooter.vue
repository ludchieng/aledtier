<template>
  <tfoot>
    <tr>
      <td></td>
      <td>
        <button id="btn-add-row">+</button>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  name: 'TierlistTableFooter',
}
</script>

<style scoped>
#btn-add-row {
  width: 100%;
}
tr, td {
  padding: 0
}
</style>
