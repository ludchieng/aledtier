<template>
  <tbody>
    <tr v-for="(subject, i) in $store.state.subjects" :key="`row-${i}`">
      <td></td>
      <td>
        <EditableCell
          isClosable
          :label="subject.label"
          @close="deleteSubject(i)"
          @blur="(label) => setSubjectLabel(i, label)"
        >
          !
        </EditableCell>
      </td>
      <td v-for="(rating, j) in subject.ratings" :key="`row-${i}-${$store.state.criterias[j]}`">
        {{ rating.length === 0 ? null : average(rating).toFixed(1) }}
      </td>
      <td></td>
      <td>
        {{ isNaN(totalAverage(subject.ratings)) ? null : totalAverage(subject.ratings).toFixed(1) }}
      </td>
    </tr>
  </tbody>
</template>

<script>
import EditableCell from './EditableCell.vue'

export default {
  name: 'TierlistTableBody',
  components: {
    EditableCell,
  },
  methods: {
    average(rating) {
      return rating.reduce((acc, rating) => acc + rating, 0) / rating.length
    },
    totalAverage(ratings) {
      return ratings.reduce((acc, rating) => acc + this.average(rating), 0) / ratings.length
    },
    setSubjectLabel(index, label) {
      this.$store.commit('setSubjectLabel', {index, label})
    },
    deleteSubject(index) {
      this.$store.commit('deleteSubject', index)
    },
  }
}
</script>

<style scoped>
</style>
