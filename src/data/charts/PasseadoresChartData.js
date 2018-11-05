import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Boa Viagem', 'Setúbal', 'Espinheiro', 'Dois Irmãos', 'Casa Forte', 'Apipucos', 'Aflitos'],
  datasets: [
    {
      label: 'Numero de passeadores',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [20, 20, 3, 1, 3, 2, 1]
    }
  ]
}
