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
      <td
        v-for="(rating, j) in subject.ratings"
        :key="`row-${i}-${$store.state.criterias[j]}`"
        tabindex="0"
        class="rating"
      >
        <div>
          {{ rating.length === 0 ? null : average(rating).toFixed(1) }}
          <span class="rating-tooltip">
            <div>
              <input
                v-for="(notation, k) in rating"
                :key="`notation-${i}-${$store.state.criterias[j]}-${k}`"
                :ref="`notation-${i}-${j}-${k}`"
                type="text"
               :value="notation"
                @change="(event) => setRatingNotation(i, j, k, event.target.value)"
                @focus="$event.target.select()"
              />
              <button
                type="text"
                @click="addRatingNotation(i, j)"
              >
                +  
              </button>
              <button
                type="text"
                @click="deleteRatingNotation(i, j)"
              >
                - 
              </button>
            </div>
          </span>
        </div>
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
   setRatingNotation(subjectIndex, criteriaIndex, ratingNotationIndex, value) {
      value = Number(value)
      if (isNaN(value))
        return;
      this.$store.commit('setRatingNotation', {subjectIndex, criteriaIndex, ratingNotationIndex, value})
    },
    async addRatingNotation(subjectIndex, criteriaIndex) {
      await this.$store.commit('addRatingNotation', {subjectIndex, criteriaIndex})
      this.$refs[`notation-${subjectIndex}-${criteriaIndex}-${0}`][0].focus()
    },
    deleteRatingNotation(subjectIndex, criteriaIndex) {
      this.$store.commit('deleteRatingNotation', {subjectIndex, criteriaIndex})
    },
  }
}
</script>

<style scoped>
.rating div {
  position: relative;
  width: 100%;
}

.rating-tooltip {
  visibility: hidden;
  background-color: #303B41;
  color: #fff;
  text-align: left;
  border-radius: 0.5rem;
  padding: 0.1rem;
  max-width: 5.3rem;
  
  position: absolute;
  top: 1.5rem;
  left: 50%;
  margin-left: -2.55rem;
  z-index: 1;
}

.rating:focus-within .rating-tooltip,
.rating-tooltip:focus-within {
  visibility: visible;
}

.rating:focus-within {
  outline: 2px solid #3586FF;
}

.rating-tooltip input,
.rating-tooltip button {
  width: 2.5rem;
  height: 1.5rem;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  border-radius: 0.5rem;
  border: 0.1rem solid #303B41;
  background-color: #0002;
  text-align: center;
}

.rating-tooltip input:focus,
.rating-tooltip button:focus {
  position: relative;
  outline: 2px solid #3586FF;
  z-index: 2;
}

.rating-tooltip button {
  padding: 0;
  color: #fff5
}
</style>
