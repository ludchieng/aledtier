<template>
  <tfoot>
    <tr>
      <td></td>
      <td>
        <button id="btn-add-row" @click="addSubject">+</button>
      </td>
    </tr>
  </tfoot>
</template>

<script>
export default {
  name: 'TierlistTableFooter',
  methods: {
    addSubject() {
      this.$store.commit('addSubject')
    }
  }
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
