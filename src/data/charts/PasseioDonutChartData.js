import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Cooper Plus', 'Cooper Premium', 'Passeios avulsos'],
  datasets: [{
    label: 'faturamento',
    backgroundColor: [palette.danger, palette.info, palette.success],
    data: [63, 27, 10]
  }]
}
