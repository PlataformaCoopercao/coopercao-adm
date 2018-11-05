<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-12">
        <vuestic-widget :headerText="$t('tables.basic')">
          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
              <tr>
                <td>Nome</td>
                <td>Contato</td>
                <td>Bairro</td>
                <td align="middle">Passeios</td>
                <td>Salário</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Boa Viagem</td>
                <td align="middle">9</td>
                <td>R$90,00</td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td align="middle">28</td>
                <td>R$280,00</td>
              </tr>
              <tr>
                <td>Frederiko Lopez</td>
                <td>fr.lopez@webmail.sp</td>
                <td>Boa Viagem</td>
                <td align="middle">16</td>
                <td>R$160,00</td>
              </tr>
              <tr>
                <td>Stanley Hummer</td>
                <td>mr_winner_2999@gmail.cb</td>
                <td>Boa Viagem</td>
                <td align="middle">7</td>
                <td>R$70,00</td>
              </tr>
              <tr>
                <td>Lendley Wintz</td>
                <td>9938198146@mailster.io</td>
                <td>Boa Viagem</td>
                <td align="middle">11</td>
                <td>R$110,00</td>
              </tr>
              <tr>
                <td>Barbara Noz</td>
                <td>barbaranoz@mailster.io</td>
                <td>Boa Viagem</td>
                <td align="middle">6</td>
                <td>R$60,00</td>
              </tr>
              <tr>
                <td>Matthew McCormick</td>
                <td>matthew30@mail.ol</td>
                <td>Boa Viagem</td>
                <td align="middle">9</td>
                <td>R$90,00</td>
              </tr>
              <tr>
                <td>Nancy Bo</td>
                <td>nancy@boonweb.com</td>
                <td>Boa Viagem</td>
                <td align="middle">28</td>
                <td>R$280,00</td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('tables.basic')">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>Nome</td>
                <td>Email</td>
                <td>Bairro</td>
                <td >Plano</td>
                <td align="middle">Pagamento</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td>Matthew McCormick</td>
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
                <td>Nancy Bo</td>
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
                <td>Nancy Bo</td>
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
                <td>Nancy Bo</td>
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
                <td>Nancy Bo</td>
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

    <div class="row">
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
    </div>

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
