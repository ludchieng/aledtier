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
        <EditableCell
          isClosable
          :label="criteria"
          @close="deleteCriteria(i)"
          @blur="(label) => setCriteria(i, label)"
        />
      </td>
      <td class="col-add-criteria">
        <button id="btn-add-criteria" @click="addCriteria">+</button>
      </td>
      <td class="col-scoring">/10</td>
    </tr>
  </thead>
</template>

<script>
import EditableCell from './EditableCell.vue'

export default {
  name: 'TierlistTableHeader',
  components: {
    EditableCell,
  },
  methods: {
    addCriteria() {
      this.$store.commit('addCriteria')
    },
    setCriteria(index, label) {
      this.$store.commit('setCriteria', {index, label})
    },
    deleteCriteria(index) {
      this.$store.commit('deleteCriteria', index)
    },
  }
}
</script>

<style scoped>
.col-scoring {
  width: 3rem;
}

.col-ratings {
  min-width: 1em;
}

.col-add-criteria {
  width: 1rem;
  padding: 0
}
</style>
