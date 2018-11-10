import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Cooper Plus', 'Cooper Premium', 'Passeios Avulsos'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.danger, palette.warning],
    data: [60, 25, 15]
  }]
}
