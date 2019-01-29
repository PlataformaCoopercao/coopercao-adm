<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="infoData" :fields="['Aumento na renda','Aumento nas despesas','Despesas mensais','Faturamento mensal']"></dashboard-info-widgets>
    <div class="row">
      <!-- <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Histórico'">
          <vuestic-chart :data="financasChartData" type="vertical-bar" />
        </vuestic-widget>
      </div> -->
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Faturamento por plano'">
          <vuestic-chart :data="walkEarningsData" type="pie" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Faturamento por bairro'">
          <vuestic-chart class="chartHeight" :data="earningsByDistrictData" type="vertical-bar" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <!-- <div class="col-md-6">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Histórico de Lucro'">
          <vuestic-chart class="chartHeight" :data="lineFinancasChartData" type="line" />
        </vuestic-widget>
      </div> -->
      <!-- <div class="col-md-6">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Faturamento por bairro'">
          <vuestic-chart class="chartHeight" :data="earningsByDistrictData" type="vertical-bar" />
        </vuestic-widget>
      </div> -->
    </div>

    <!--

    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="$t('charts.pieChart')">
          <vuestic-chart :data="pieChartData" type="pie" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="$t('charts.donutChart')">
          <vuestic-chart :data="donutChartData" type="donut" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="$t('charts.bubbleChart')">
          <vuestic-chart :data="bubbleChartData" type="bubble" />
        </vuestic-widget>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  getLineChartData
} from '../../data/charts/LineFinancasChartData'
import axios from 'axios'
import FinancasChartData from '../../data/charts/FinancasChartData'
import FinancasChartData2 from '../../data/charts/FinancasChartData2'
import FinancasPieChartData from '../../data/charts/FinancasPieChartData'
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
    let currentDate = new Date()
    // let dd = currentDate.getDate()
    let mm = currentDate.getMonth() + 1
    let yyyy = currentDate.getFullYear()
    if (mm < 10) {
      mm = '0' + mm
    }

    axios.post('https://us-central1-coopercao-backend.cloudfunctions.net/getWalksByMonthYear', {
      month: mm,
      year: yyyy
    })
      .then(response => {
        this.walks = response.data
        this.setInfoData()
        this.setWalkEarningsData()
        this.setEarningByDistrictData()
      })
      .catch(error => {
        console.log(error)
      })
  },
  data: () => ({
    walks: [],
    infoData: [],
    walkEarningsData: {},
    earningsByDistrictData: {},
    financasChartData: FinancasChartData,
    lineFinancasChartData: getLineChartData(),
    financasPieChartData: FinancasPieChartData,
    financasChartData2: FinancasChartData2
  }),
  methods: {
    setInfoData () {
      let earnings = 0
      for (let i = 0; i < this.walks.length; i++) {
        earnings += this.walks[i].value
      }
      this.infoData.push('R$' + earnings)
      this.infoData.push('R$' + (earnings * 0.3))
      this.infoData.push('R$' + (earnings * 0.3))
      this.infoData.push('R$' + earnings)
    },
    setWalkEarningsData () {
      let separate = 0
      let plan = 0
      for (let i = 0; i < this.walks.length; i++) {
        if (this.walks[i].walk_type === 'separate') { separate += this.walks[i].value } else { plan += this.walks[i].value }
      }

      this.walkEarningsData = {
        labels: ['Passeio Avulso', 'Plano'],
        datasets: [{
          label: 'Population (millions)',
          backgroundColor: [palette.primary, palette.danger, palette.warning],
          data: [separate, plan]
        }]
      }
    },
    setEarningByDistrictData () {
      axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAreas')
        .then(response => {
          let areas = response.data
          let earningsByArea = new Array(areas.length).fill(0)
          for (let i = 0; i < this.walks.length; i++) {
            for (let j = 0; j < areas.length; j++) {
              if (this.walks[i].address.district === areas[j]) { earningsByArea[j] += this.walks[i].value }
            }
          }

          this.earningsByDistrictData = {
            labels: areas,
            datasets: [{
              label: 'Faturamento R$',
              backgroundColor: palette.primary,
              borderColor: palette.transparent,
              data: earningsByArea
            }]
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    refreshData () {
      this.lineFinancasChartData = getLineChartData()
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
