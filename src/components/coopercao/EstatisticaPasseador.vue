<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="infoData" :fields="['Passeadores','Nota média','Abaixo da Média','Acima da Média']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Passeadores por área'">
          <vuestic-chart :data="areaData" type="vertical-bar" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Passeadores avaliados'">
          <vuestic-chart :data="evaluationData" type="pie" />
        </vuestic-widget>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Avaliação dos passeadores'">
          <vuestic-chart class="chartHeight" :data="lineChartData" type="line" />
        </vuestic-widget>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  getLineChartData
} from '../../data/charts/LinePasseadoresChartData'
import axios from 'axios'
import SidebarLink from '../admin/app-sidebar/components/SidebarLink'
import DashboardInfoWidgets from '../dashboard/DashboardInfoWidgets'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  name: 'charts',
  components: {
    SidebarLink,
    DashboardInfoWidgets
  },
  created () {
    this.loadData()
  },
  mounted () {
  },
  data: () => ({
    areaData: {},
    evaluationData: {},
    infoData: [],
    walkersData: [],
    lineChartData: getLineChartData(),

  }),
  methods: {
    buildAreaGraph () {
      axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAreas')
        .then(response => {
          let areaLabels = response.data
          let walkersPerArea = new Array(areaLabels.length).fill(0)

          for (let i = 0; i < areaLabels.length; i++) {
            for (let j = 0; j < this.walkersData.length; j++) {
              if (Object.keys(this.walkersData[j].areas).includes(areaLabels[i])) {
                walkersPerArea[i] += 1
              }
            }
          }

          this.areaData = {
            labels: areaLabels,
            datasets: [{
              label: 'Numero de passeadores',
              backgroundColor: palette.primary,
              borderColor: palette.transparent,
              data: walkersPerArea
            }]
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    buildEvaluationData () {
      let evaluatedWalkers = 0
      let notEveluatedWalkers = 0

      for (let i = 0; i < this.walkersData.length; i++) {
        if (this.walkersData[i].total_walks > 0 && this.walkersData[i].score > 0) { evaluatedWalkers++ } else { notEveluatedWalkers++ }
      }

      this.evaluationData = {
        labels: ['Avaliado', 'Não avaliado'],
        datasets: [{
          label: 'Passeadores',
          backgroundColor: [palette.primary, palette.danger],
          data: [evaluatedWalkers, notEveluatedWalkers]
        }]

      }
    },
    getAverageScore (walkersData) {
      let totalScore = 0
      let evWalkers = 0

      for (let i = 0; i < walkersData.length; i++) {
        if (walkersData[i].total_walks > 0) {
          evWalkers++
          totalScore += walkersData[i].score
        }
      }

      return totalScore / evWalkers
    },
    underAverageWalkers (walkersData) {
      let undrAvgWalkers = 0
      for (let i = 0; i < walkersData.length; i++) {
        if (walkersData[i].total_walks > 0 && walkersData[i].score < 7) { undrAvgWalkers++ }
      }
      return undrAvgWalkers
    },
    aboveAverageWalkers (walkersData) {
      let abvAvgWalkers = 0
      for (let i = 0; i < walkersData.length; i++) {
        if (walkersData[i].total_walks > 0 && walkersData[i].score >= 7) { abvAvgWalkers++ }
      }
      return abvAvgWalkers
    },
    loadData () {
      axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAllWalkers')
        .then(response => {
          this.walkersData = response.data
          this.infoData.push(this.walkersData.length)
          this.infoData.push(this.getAverageScore(this.walkersData))
          this.infoData.push(this.underAverageWalkers(this.walkersData))
          this.infoData.push(this.aboveAverageWalkers(this.walkersData))
          this.buildAreaGraph()
          this.buildEvaluationData()
        })
        .catch(error => {
          console.log(error)
        })
    },
    refreshData () {
      this.lineChartData = getLineChartData()
    },
  },
}

</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 200px;
    }
  }

  .widgetHeight {
    max-height: 600px;
  }

  .chartHeight {
    max-height: 500px;
  }

</style>
