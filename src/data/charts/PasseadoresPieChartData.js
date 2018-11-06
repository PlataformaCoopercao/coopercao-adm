import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Avaliado', 'Não avaliado'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.danger],
    data: [25, 5]
  }]
}
