import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Boa Viagem', 'Setúbal', 'Espinheiro', 'Dois Irmãos', 'Casa Forte', 'Apipucos', 'Aflitos'],
  datasets: [
    {
      label: 'Numero de clientes',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [15, 12, 6, 3, 7, 2, 4]
    }
  ]
}
