<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'Clientes'">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>Nome</td>
                <td>Contato</td>
                <td>Email</td>
                <td>Bairro</td>
                <td>Plano</td>
                <td align="middle">Pagamento</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>98874-6321</td>
                <td>matthew30@mail.ol</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Nancy Bo</td>
                <td>98874-4331</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td>Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Frederiko Lopez</td>
                <td>98874-8743</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Boa Viagem</td>
                <td>Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr class="table-danger">
                <td>
                  <span class="badge badge-pill badge-danger">Atrasado</span>
                </td>
                <td>Stanley Hummer</td>
                <td>98874-2365</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                  <i class="fa fa-exclamation-triangle icon-right input-icon error-icon"></i>
                </td>
              </tr>
              <tr class="table-success">
                <td>
                  <span class="badge badge-pill badge-primary">Novo</span>
                </td>
                <td>Lendley Wintz</td>
                <td>98874-8943</td>
                <td>9938198146@mailster.io</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle" class="valid">
                  <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr class="table-success">
                <td>
                  <span class="badge badge-pill badge-primary">Novo</span>
                </td>
                <td>Barbara Noz</td>
                <td>98874-2371</td>
                <td>barbaranoz@mailster.io</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
                <td>98874-7854</td>
                <td>matthew30@mail.ol</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>Nancy Bo</td>
                <td>98874-8462</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
               <tr>
                <td>
                </td>
                <td>Bancy No</td>
                <td>98874-8462</td>
                <td>bancy@noonweb.com</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
               <tr>
                <td>
                </td>
                <td>Canny Bo</td>
                <td>98874-8462</td>
                <td>canny@boonweb.com</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
               <tr>
                <td>
                </td>
                <td>Canby No</td>
                <td>98874-8462</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
               <tr>
                <td>
                </td>
                <td>Yancy No</td>
                <td>98874-8462</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td >Cooper Plus</td>
                <td align="middle">
                   <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </vuestic-widget>
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
import FieldsDef from 'vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef from 'vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from 'vuestic-components/vuestic-datatable/data/query-params'
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner
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

  .color-icon-label-table {
    td:first-child {
      width: 1rem;
    }
  }
</style>
