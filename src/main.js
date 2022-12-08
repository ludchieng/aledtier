import { createApp } from 'vue'
import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import App from './App.vue'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = createStore({
  plugins: [vuexLocal.plugin],
  state () {
    return {
      tierListName: "Tier list des ouvrages d'art et génie civil ferroviaire",
      criterias: [
        'Histoire et patrimoine',
        'Utilité fonctionnelle',
        'Beauté majestueuse',
      ],
      subjects: [{
        label: 'Viaduc de Garabit',
        image: 'http://i-cms.linternaute.com/image_cms/original/10168543-le-viaduc-de-garabit.jpg',
        ratings: [
          [5, 6], [2, 9], [7, 6],
        ],
      }, {
        label: 'Pont ferroviaire sur le Tech',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/PontsurleTech1873.jpg',
        ratings: [
          [4, 8], [7, 2], [11, 11],
        ],
      }],
    }
  },
  mutations: {
    addCriteria(state) {
      state.criterias.push('')
      state.subjects = state.subjects.map((subject) => (
        {...subject, ratings: [...subject.ratings, []]}
      ))
    },
    addSubject(state) {
      state.subjects.push({
        label: '',
        image: '',
        ratings: Array.from({length: state.criterias.length}).map(() => []),
      })
    },
    setCriteria(state, {index, label}) {
      state.criterias[index] = label
    },
    setSubjectLabel(state, {index, label}) {
      state.subjects[index].label = label
    },
    deleteCriteria(state, index) {
      state.criterias.splice(index, 1)
      state.subjects.forEach((subject) => subject.ratings.splice(index, 1))
    },
    deleteSubject(state, index) {
      state.subjects.splice(index, 1)
    },
    setRatingNotation(state, {subjectIndex, criteriaIndex, ratingNotationIndex, value}) {
      state.subjects[subjectIndex].ratings[criteriaIndex][ratingNotationIndex] = value
    },
    addRatingNotation(state, {subjectIndex, criteriaIndex}) {
      const ratingsArr = state.subjects[subjectIndex].ratings[criteriaIndex]
      let numberToPush;
      // immonde mais flemme, ça va pas scale de tte façon
      if (ratingsArr.length === 0) {
        numberToPush = criteriaIndex === 0
          ? subjectIndex === 0
            ? 1
            : state.subjects[subjectIndex-1].ratings.length > 0
              ? Math.max(1, state.subjects[subjectIndex-1].ratings[state.subjects[subjectIndex-1].ratings.length-1].length)
              : 1
          : Math.max(1, state.subjects[subjectIndex].ratings[criteriaIndex-1].length)
      } else {
        numberToPush = 1
      }
      for (let i = 0; i < numberToPush; i++) {
        ratingsArr.push(null)
      }
    },
    deleteRatingNotation(state, {subjectIndex, criteriaIndex}) {
      const ratingsArr = state.subjects[subjectIndex].ratings[criteriaIndex]
      const lastIndex = ratingsArr.length - 1
      ratingsArr.splice(lastIndex, 1)
    },
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
