import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
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
      state.criterias = [...state.criterias, ""]
      state.subjects = state.subjects.map((subject) => (
        {...subject, ratings: [...subject.ratings, []]}
      ))
    },
    addSubject(state) {
      state.subjects = [...state.subjects, {
        label: '',
        image: '',
        ratings: Array.from({length: state.criterias.length}).map(() => []),
      }]
    },
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
