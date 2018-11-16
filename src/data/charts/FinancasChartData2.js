import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Boa Viagem', 'Setúbal', 'Espinheiro', 'Dois Irmãos', 'Casa Forte', 'Apipucos', 'Aflitos'],
  datasets: [
    {
      label: 'Faturamento R$',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [2189, 2567, 1945, 2219, 2134, 1890, 2100]
    }
  ]
}
