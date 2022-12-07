<template>
    <table>
      <TierlistTableHeader />
      <TierlistTableBody />
      <TierlistTableFooter />
    </table>
</template>

<script>
import TierlistTableHeader from './TierlistTableHeader.vue'
import TierlistTableBody from './TierlistTableBody.vue'
import TierlistTableFooter from './TierlistTableFooter.vue'

export default {
  name: 'TierlistTable',
  components: {
    TierlistTableHeader,
    TierlistTableBody,
    TierlistTableFooter,
  }
  
}
</script>

<style>
table {
  width: 100%;
}

td {
  border: 1px solid #555;
  text-align: center;
}

button {
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  padding: 0.5rem 0.7rem;
  border-radius: 0.2rem;
  cursor: pointer;
}

button:hover {
  background-color: #fff1;
  box-shadow: 0 0 2rem#fff1;
}

#btn-add-row {
  width: 100%;
}
</style>
