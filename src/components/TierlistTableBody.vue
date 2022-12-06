<template>
  <tbody>
    <tr v-for="(subject, i) in $store.state.subjects" :key="`row-${i}`">
      <td></td>
      <td>{{ subject.label }}</td>
      <td v-for="(rating, j) in subject.ratings" :key="`row-${i}-${$store.state.criterias[j]}`">
        {{ average(rating).toFixed(1) }}
      </td>
      <td></td>
      <td>
        {{ totalAverage(subject.ratings).toFixed(1) }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TierlistTableBody',
  methods: {
    average(rating) {
      return rating.reduce((acc, rating) => acc + rating, 0) / rating.length
    },
    totalAverage(ratings) {
      return ratings.reduce((acc, rating) => acc + this.average(rating), 0) / ratings.length
    },
  }
}
</script>

<style scoped>

</style>
