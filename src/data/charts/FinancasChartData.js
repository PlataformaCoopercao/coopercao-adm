import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  datasets: [
    {
      label: 'Faturamento',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [2000, 2057, 1765, 1850, 2000, 2189, 2567, 1945, 2219, 2134, 1890, 2100]
    },
    {
      label: 'Despesas',
      backgroundColor: palette.danger,
      borderColor: palette.transparent,
      data: [850, 900, 524, 567, 980, 870, 900, 1000, 679, 762, 985, 824]
    }
  ]
}
