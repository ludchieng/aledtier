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
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
