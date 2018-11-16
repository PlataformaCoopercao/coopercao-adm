<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="[72,5,4,20]" :fields="['Passeios esses mês','Passeios/dia','Passeios cancelados/mês','Passeios avulsos']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Passeios por plano'">
          <vuestic-chart :data="passeioDonutChartData" type="donut" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Média de passeios por dia da semana'">
          <vuestic-chart :data="passeioChartData" type="vertical-bar" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Passeios por mês'">
          <vuestic-chart class="chartHeight" :data="passeioLineChartData" type="line"/>
        </vuestic-widget>
      </div>
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
} from '../../data/charts/LinePasseioChartData'
import PasseioDonutChartData from '../../data/charts/PasseioDonutChartData'
import PasseioChartData from '../../data/charts/PasseioChartData'
import SidebarLink from '../admin/app-sidebar/components/SidebarLink'
import DashboardInfoWidgets from '../dashboard/DashboardInfoWidgets'

export default {
  name: 'charts',
  components: {
    SidebarLink,
    DashboardInfoWidgets
  },
  data: () => ({
    passeioDonutChartData: PasseioDonutChartData,
    passeioLineChartData: getLineChartData(),
    passeioChartData: PasseioChartData,
  }),
  methods: {
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

  .widgetHeight{
    max-height: 600px;
  }

  .chartHeight {
    max-height: 500px;
  }

</style>
