<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="[50,8.2,0,24]" :fields="['Passeadores','Nota média','Reclamações','Elogios']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Áreas de atendimento'">
          <vuestic-chart :data="passeadoresChartData" type="vertical-bar" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Avaliação dos passeadores'">
          <vuestic-chart :data="lineChartData" type="line" />
        </vuestic-widget>
        <!-- <vuestic-widget class="chart-widget" :headerText="$t('charts.horizontalBarChart')">
          <vuestic-chart :data="horizontalBarChartData" type="horizontal-bar" />
        </vuestic-widget> -->
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-12">

      </div>
    </div>

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
} from '../../data/charts/LinePasseadoresChartData'
import BubbleChartData from '../../data/charts/BubbleChartData'
import PieChartData from '../../data/charts/PieChartData'
import DonutChartData from '../../data/charts/DonutChartData'
import PasseadoresChartData from '../../data/charts/PasseadoresChartData'
import HorizontalBarChartData from '../../data/charts/HorizontalBarChartData'
import SidebarLink from '../admin/app-sidebar/components/SidebarLink'
import DashboardInfoWidgets from '../dashboard/DashboardInfoWidgets'

export default {
  name: 'charts',
  components: {
    SidebarLink,
    DashboardInfoWidgets
  },
  data: () => ({
    bubbleChartData: BubbleChartData,
    lineChartData: getLineChartData(),
    pieChartData: PieChartData,
    donutChartData: DonutChartData,
    passeadoresChartData: PasseadoresChartData,
    horizontalBarChartData: HorizontalBarChartData,
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
      height: 550px;
    }
  }

</style>
