import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Cooper Plus', 'Cooper Premium', 'Sem plano'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.danger, palette.warning],
    data: [55, 30, 15]
  }]
}
