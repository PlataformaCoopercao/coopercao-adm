import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Média de passeios',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [8.2, 10, 7, 10, 8, 4, 3]
    }
  ]
}
