<template>
  <div>
    <div class="row">
      <div class="col-md-12">

          <div class="table-responsive">
            <table class="table table-striped table-sm ">
              <thead>
                <tr>
                  <td>Data</td>
                  <td>Horário</td>
                  <td>Cachorro</td>
                  <td>Cliente</td>
                  <td>Passeador</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
                <tr>
                  <td>20/01/2018</td>
                  <td>16:00</td>
                  <td>Lupim</td>
                  <td>João</td>
                  <td>Ana</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tables.advanced')">
          <vuestic-data-table
            :apiUrl="apiUrl"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :apiMode="apiMode"
            :paginationPath="paginationPath"
            :queryParams="queryParams"
          >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </vuestic-data-table>
        </vuestic-widget>
      </div>
    </div> -->

  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
import SidebarLink from './SidebarLink'
import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import {
  SpringSpinner
} from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Historico-passeio',
  components: {
    SpringSpinner,
    SidebarLink
  },
  data () {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams
    }
  }
}

</script>

<style lang="scss">
  button {
    float: right;
  }

</style>
