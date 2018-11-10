<template>
  <div class="charts-page">
    <dashboard-info-widgets :data="['R$345,00','R$220,00','R$720,00','R$2200,00']" :fields="['Aumento na renda','Aumento nas despesas','Despesas mensais','Faturamento mensal']"></dashboard-info-widgets>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Histórico'">
          <vuestic-chart :data="financasChartData" type="vertical-bar" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'Faturamento por plano'">
          <vuestic-chart :data="financasPieChartData" type="pie" />
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Histórico de Lucro'">
          <vuestic-chart class="chartHeight" :data="lineFinancasChartData" type="line" />
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget widgetHeigth" :headerText="'Faturamento por bairro'">
          <vuestic-chart class="chartHeight" :data="financasChartData2" type="vertical-bar" />
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
} from '../../data/charts/LineFinancasChartData'
import FinancasChartData from '../../data/charts/FinancasChartData'
import FinancasChartData2 from '../../data/charts/FinancasChartData2'
import FinancasPieChartData from '../../data/charts/FinancasPieChartData'
import SidebarLink from '../admin/app-sidebar/components/SidebarLink'
import DashboardInfoWidgets from '../dashboard/DashboardInfoWidgets'

export default {
  name: 'charts',
  components: {
    SidebarLink,
    DashboardInfoWidgets
  },
  data: () => ({
    financasChartData: FinancasChartData,
    lineFinancasChartData: getLineChartData(),
    financasPieChartData: FinancasPieChartData,
    financasChartData2: FinancasChartData2
  }),
  methods: {
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
