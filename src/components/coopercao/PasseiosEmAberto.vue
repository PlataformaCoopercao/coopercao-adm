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
                <tr v-for="walk in walks_unassigned" :key="walk.key">
                  <td>{{walk.date}}</td>
                  <td>{{walk.time}}</td>
                  <td>{{walk.dog.name}}</td>
                  <td>ana</td>
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
import axios from 'axios'
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
  name: 'passeios-aberto',
  components: {
    SpringSpinner,
    SidebarLink
  },
  created () {
    axios.get('https://us-central1-coopercao-backend.cloudfunctions.net/getUnassignedWalks')
      .then(response => {
        this.walks_unassigned = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      walks_unassigned: [],
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
