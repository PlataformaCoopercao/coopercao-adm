<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="[50,2,2,'Plus']" :fields="['Clientes','Novos Clientes/Mês','Pagamentos Atrasados','Plano mais Utilizado']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Clientes por bairro'">
          <vuestic-chart :data="clientesChartData" type="vertical-bar" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Planos'">
          <vuestic-chart :data="clientesPieChartData" type="pie" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Número de clientes'">
          <vuestic-chart class="chartHeight" :data="lineChartData" type="line"/>
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
} from '../../data/charts/LineClientesChartData'
import BubbleChartData from '../../data/charts/BubbleChartData'
import ClientesPieChartData from '../../data/charts/ClientesPieChartData'
import DonutChartData from '../../data/charts/DonutChartData'
import ClientesChartData from '../../data/charts/ClientesChartData'
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
    clientesPieChartData: ClientesPieChartData,
    donutChartData: DonutChartData,
    clientesChartData: ClientesChartData,
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
