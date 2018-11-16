import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

// const generateValue = () => {
//   return Math.floor(Math.random() * 100)
// }

// const generateYLabels = () => {
//   const flip = !!Math.floor(Math.random() * 2)
//   return flip ? ['Debit'] : ['Debit']
// }

// const generateArray = (length) => {
//   return Array.from(Array(length), generateValue)
// }

// const getSize = () => {
//   const minSize = 4
//   return minSize + Math.floor(Math.random() * 3)
// }

export const getLineChartData = () => {
  const size = 12
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const yLabels = ['Avaliação']

  return {
    labels: months.splice(0, size),
    datasets: [
      {
        label: yLabels[0],
        backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
        borderColor: palette.transparent,
        data: [5000, 5200, 4800, 4500, 4950, 5500, 6000, 5400, 5600, 5200, 5000, 5300],
      }
    ],
  }
}
