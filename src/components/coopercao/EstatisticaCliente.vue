<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="infoData" :fields="['Clientes','Novos Clientes/Mês','Média de Idade','Plano mais Utilizado']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Clientes por bairro'">
          <vuestic-chart :data="areaGraphData" type="vertical-bar" />
        </vuestic-widget>
      </div>
      <!-- <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Planos'">
          <vuestic-chart :data="clientesPieChartData" type="pie" />
        </vuestic-widget>
      </div> -->
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Número de clientes'">
          <vuestic-chart class="chartHeight" :data="lineChartData" type="line" />
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
  <!-- </div> -->
</template>

<script>
import {
  getLineChartData
} from '../../data/charts/LineClientesChartData'
import axios from 'axios'
import BubbleChartData from '../../data/charts/BubbleChartData'
import ClientesPieChartData from '../../data/charts/ClientesPieChartData'
import DonutChartData from '../../data/charts/DonutChartData'
import ClientesChartData from '../../data/charts/ClientesChartData'
import HorizontalBarChartData from '../../data/charts/HorizontalBarChartData'
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
    axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAllClients')
      .then(response => {
        this.clients = response.data
        this.setInfoData()
        this.setAreaGraphData()
      })
      .catch(error => {
        console.log(error)
      })
  },
  data: () => ({
    clients: [],
    infoData: [],
    areaGraphData: {},
    bubbleChartData: BubbleChartData,
    lineChartData: getLineChartData(),
    clientesPieChartData: ClientesPieChartData,
    donutChartData: DonutChartData,
    clientesChartData: ClientesChartData,
    horizontalBarChartData: HorizontalBarChartData,
  }),
  methods: {
    setInfoData () {
      this.infoData.push(this.clients.length)
      this.infoData.push(this.getNewClients(this.clients))
      this.infoData.push(this.clientAverageAge(this.clients) + ' anos')
      this.infoData.push('Avulso')
    },
    getNewClients (clients) {
      let newClients = 0
      let currentMonth = new Date().getMonth() + 1
      let currentYear = new Date().getFullYear()
      let currentDate = currentMonth + '.' + currentYear

      for (let i = 0; i < clients.length; i++) {
        let registDate = clients[i].regist_date
        if (registDate.includes(currentDate)) { newClients++ }
      }

      return newClients
    },
    clientAverageAge (clients) {
      let ageSum = 0
      let currentYear = new Date().getFullYear()

      for (let i = 0; i < clients.length; i++) {
        let split = clients[i].birth_date.split('.')
        ageSum += currentYear - split[2]
      }

      return (ageSum / clients.length).toFixed(0)
    },
    setAreaGraphData () {
      axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getAreas')
        .then(response => {
          let areas = response.data
          let clientsPerArea = new Array(areas.length).fill(0)

          for (let i = 0; i < this.clients.length; i++) {
            for (let j = 0; j < areas.length; j++) {
              //  console.log('client area:'+ this.clients[i].adddress.district);
              if (this.clients[i].address.district === areas[j]) { clientsPerArea[j]++ }
            }
          }

          this.areaGraphData = {
            labels: areas,
            datasets: [{
              label: 'Numero de clientes',
              backgroundColor: palette.primary,
              borderColor: palette.transparent,
              data: clientsPerArea
            }]
          }
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
