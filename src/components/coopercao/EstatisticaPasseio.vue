<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="infoData" :fields="['Passeios esses mês','Passeios/dia','Passeios cancelados/mês','Passeios avulsos']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Passeios por plano'">
          <vuestic-chart :data="walkPlanData" type="donut" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Passeios por dia da semana'">
          <vuestic-chart :data="walkDays" type="vertical-bar" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Passeios por mês'">
          <vuestic-chart class="chartHeight" :data="passeioLineChartData" type="line" />
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getLineChartData
} from '../../data/charts/LinePasseioChartData'
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
  data () {
    return {
      infoData: [],
      walks: [],
      walkPlanData: {},
      walkDays: {},
      passeioLineChartData: getLineChartData(),
    }
  },
  created () {
    let currentDate = new Date()
    let dd = currentDate.getDate()
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
        this.infoData.push(this.walks.length)
        this.infoData.push((this.walks.length / dd).toFixed(0))
        this.infoData.push(0)
        this.infoData.push(this.passeiosAvulsos())
        this.setWalkDays()
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    refreshData () {
      this.lineChartData = getLineChartData()
    },
    passeiosAvulsos () {
      let separateWalks = 0
      let planWalks = 0
      for (let i = 0; i < this.walks.length; i++) {
        if (this.walks[i].walk_type === 'separate') { separateWalks++ } else { planWalks++ }
      }
      this.walkPlanData = {
        labels: ['Avulso', 'Plano'],
        datasets: [{
          label: 'faturamento',
          backgroundColor: [palette.danger, palette.info],
          data: [separateWalks, planWalks]
        }]
      }
      return separateWalks
    },
    setWalkDays () {
      let walksPerDay = new Array(7).fill(0)
      let day = new Date()
      for (let i = 0; i < this.walks.length; i++) {
        let date = this.walks[i].date.split('.')
        day.setDate(date[0])
        walksPerDay[day.getDay()]++
      }
      console.log(walksPerDay)
      this.walkDays = {
        labels: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        datasets: [{
          label: 'Média de passeios',
          backgroundColor: palette.primary,
          borderColor: palette.transparent,
          data: [walksPerDay[0], walksPerDay[1], walksPerDay[2], walksPerDay[3], walksPerDay[4], walksPerDay[5], walksPerDay[6]]
        }]
      }
    }

  }
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
